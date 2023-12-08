import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "../Fetures/wishlistSlice";
import authSlice from "../Fetures/authSlice";

const Store = configureStore({
    reducer: {
        wishList : wishlistSlice,
        Authentication: authSlice
    }
});

export default Store;