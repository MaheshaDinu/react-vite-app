import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {ProductData} from "../model/ProductData.ts";
import {backendApi} from "../api.ts";

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
        const response = await backendApi.get("/products/all");
        return response.data;
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
                (state:ProductsState, action) => {
                    state.error = action.error.message();
                    alert("Error: " + state.error)
                });
    }
});

export default productsSlice.reducer;