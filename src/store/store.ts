import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice.ts";

export const store = configureStore({
    reducer:{
        product: productReducer
    }
})

export type rootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch