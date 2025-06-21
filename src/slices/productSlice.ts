import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {ProductData} from "../model/ProductData.ts";

interface ProductsState {
    list: ProductData[];
    error: string | null | undefined;
}

const initialState: ProductsState = {
    list: [],
    error: null
};

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async () => {
        const response = await fetch('./product-data.json');
        return await response.json();
    }
);

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Async Response Pending State
            .addCase(getAllProducts.pending,
                () => {
                    alert("Products are still loading..")
                })
            // Async Response Complete State
            .addCase(getAllProducts.fulfilled,
                (state:ProductsState, action:PayloadAction<any>) => {
                    state.list = action.payload;
                })
            // Async Response Failure State
            .addCase(getAllProducts.rejected,
                (state:ProductsState, action: ReturnType<typeof getAllProducts.rejected>) => {
                    state.error = action.payload ?? "Unknown error";
                    alert("Error: " + state.error)
                });
    }
});

export default productsSlice.reducer;