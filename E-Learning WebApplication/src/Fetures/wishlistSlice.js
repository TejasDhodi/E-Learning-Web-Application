import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('Products')) || []

const wishListSlice = createSlice({
    name: "WishList",
    initialState,
    reducers: {
        add: (state, action) => {
            const productId = action.payload.id;
            const isProductInWishlist = state.some(item => item.id === productId);

            if (!isProductInWishlist) {
                const updatedState = [...state, action.payload];
                localStorage.setItem('Products', JSON.stringify(updatedState));
                return updatedState;
            }
            return state;

        },
        remove: (state, action) => {
            const updatedState = state.filter((item) => item.id !== action.payload);
            localStorage.setItem('Products', JSON.stringify(updatedState));
            return updatedState
        }
    }
})

export const { add, remove } = wishListSlice.actions;
export default wishListSlice.reducer;