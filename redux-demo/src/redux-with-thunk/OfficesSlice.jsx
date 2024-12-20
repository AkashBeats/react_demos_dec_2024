import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOffices =
    createAsyncThunk("office/getOffices", async () => {
        const response = await axios.get("http://localhost:5050/offices")
        return response.data;

    })


const sliceOptions = {
    name: 'office',
    initialState: {
        offices: [], isLoading: false, hasError: null
    },
    reducer: {

    },
    extraReducers: (builder) => {

        builder.addCase(getOffices.fulfilled, (state, action) => {
            state.offices = action.payload;
            state.isLoading = false
        });

        builder.addCase(getOffices.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(getOffices.rejected, (state, action) => {
            state.hasError = action.error.message
            state.isLoading = false
        });

    }
}


const OfficeSlice = createSlice(sliceOptions)

export default OfficeSlice