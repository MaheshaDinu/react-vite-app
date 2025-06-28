import {combineReducers} from "redux";
import productReducer from "./productSlice.ts";
import cartReducer from "./cartSlice.ts";

export const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
})
export type RootReducerState = ReturnType<typeof rootReducer>