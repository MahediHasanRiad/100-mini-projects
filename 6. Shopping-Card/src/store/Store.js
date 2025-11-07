import { configureStore } from "@reduxjs/toolkit";
import ShoppingCartSlice from "../component/feature/Shopping-Card/shoppingCardSlice";

export const Store = configureStore({
    reducer: {
        ShoppingCart: ShoppingCartSlice
    }
})