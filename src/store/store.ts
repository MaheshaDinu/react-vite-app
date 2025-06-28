import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "../slices/rootReducer.ts";

export const store = configureStore({
    reducer: rootReducer
})

export type rootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch