import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from './CounterSlice'
export const anotherStore = configureStore({
    reducer: {
        counter: CounterSlice.reducer
    }
})
