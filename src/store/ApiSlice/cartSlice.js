import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/base";
import { authHeader } from "../../helpers/authHelper";

const initialState = {
    cartDetail: [],
    cartData: []
};

const userData = localStorage.getItem("authUser")
const header = JSON.parse(userData)
const config = {
    headers: {
        'x-auth-token': header?.access_token
    }
};

export const getAddToCartDetail = createAsyncThunk(
    "cart/getAddToCartDetail ",
    async () => {
        try {
            const response = await axiosInstance.get(`cart`, {
                headers: { ...authHeader() },
            });
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
);

export const createProductCart = createAsyncThunk("cart/createProductCart", async ({ payload }) => {
    try {
        const response = await axiosInstance.post(`cart`, payload, {
            headers: { ...authHeader() },
        });
        return response.data;
    } catch (e) {
        return e.response.data;
    }
});

export const deleteProductCart = createAsyncThunk("cart/deleteProductCart", async (payload) => {
    try {
        const response = await axiosInstance.delete(`cart/${payload?.id}`, {
            headers: { ...authHeader() },
            data: payload, // Add the payload here
        });
        return response.data;
    } catch (e) {
        throw e.response?.data || "Error deleting product from cart";
    }
});


export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        setCartData: (state, action) => {
            state.cartData = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getAddToCartDetail.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getAddToCartDetail.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.cartDetail = action?.payload?.payload.data;
            })
            .addCase(getAddToCartDetail.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(createProductCart.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createProductCart.fulfilled, (state, action) => {
                state.status = "succeeded";
            })
            .addCase(createProductCart.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(deleteProductCart.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteProductCart.fulfilled, (state, action) => {
                state.status = "succeeded";
            })
            .addCase(deleteProductCart.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});


export const { setCartData } = cartSlice.actions
export default cartSlice.reducer;