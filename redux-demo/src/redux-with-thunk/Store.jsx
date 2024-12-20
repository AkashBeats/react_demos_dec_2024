import { configureStore } from "@reduxjs/toolkit";
import OfficeSlice from "./OfficesSlice";
const thunkStore = configureStore({
    reducer:{
        office: OfficeSlice.reducer
    }
})

export default thunkStore