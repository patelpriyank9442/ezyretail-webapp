import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance, post } from "../../api/base";
import { authHeader } from "../../helpers/authHelper";
import axios from "axios";

const initialState = {
    shippingDetail: [],
    loading: false,
    error: null,
    success: false,
};

const userData = localStorage.getItem("authUser")
const header = JSON.parse(userData)
const config = {
    headers: {
        'x-auth-token': header?.access_token
    }
};
console.log("configconfig", config);

export const getShippingAddress = createAsyncThunk(
    "shippingAddress/getShippingAddress ",
    async () => {
        try {
            const response = await axiosInstance.get(`shippingAddress`, {
                headers: { ...authHeader() },
            });
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
);

export const createShippingAddress = createAsyncThunk("shippingAddress/createShippingAddress", async ({ payload, addressDetail }) => {
    try {
        let response
        if (addressDetail?._id) {
            response = await axiosInstance.patch(`shippingAddress/${addressDetail?._id}`, payload,
                { headers: { ...authHeader() } },
            );
        } else {
            response = await axiosInstance.post(`shippingAddress`, payload,
                { headers: { ...authHeader() } },
            );
        }
        return response.data;
    } catch (e) {
        return e.response.data;
    }
});

export const deleteShippingAddress = createAsyncThunk("shippingAddress/deleteShippingAddress", async (payload) => {
    try {
        const response = await axiosInstance.delete(`shippingAddress/${payload?.id}`, {
            headers: { ...authHeader() },
            data: payload, // Add the payload here
        });
        return response.data;
    } catch (e) {
        throw e.response?.data || "Error deleting product from cart";
    }
});


export const shippingAddressSlice = createSlice({
    name: "shippingAddress",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getShippingAddress.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getShippingAddress.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.shippingDetail = action?.payload?.payload.data;
            })
            .addCase(getShippingAddress.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(createShippingAddress.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(createShippingAddress.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;
            })
            .addCase(createShippingAddress.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.success = false;
            })
            .addCase(deleteShippingAddress.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = false;
            })
            .addCase(deleteShippingAddress.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.success = true;
            })
            .addCase(deleteShippingAddress.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.success = false;
            });
    },
});


export default shippingAddressSlice.reducer;