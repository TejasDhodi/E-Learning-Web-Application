import {createSlice} from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('token')) || [];

const authSlice = createSlice({
    name: "Authentication",
    initialState,
    reducers: {
        setToken: (state, action) => {
            const tokenId = action.payload.id;
            const isTokenAvailable = state.some(token => token.useId === tokenId);

            if (!isTokenAvailable) {
                const updatedState = [...state, action.payload];
                localStorage.setItem('token', JSON.stringify(updatedState));
                return updatedState;
            }
            return state;
        }
    }
});

export const {setToken} = authSlice.actions;
export default authSlice.reducer;