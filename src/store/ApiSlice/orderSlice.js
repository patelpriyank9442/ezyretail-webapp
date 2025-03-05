import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/base";
import { authHeader } from "../../helpers/authHelper";

const initialState = {
    orderDetail: [],
};

export const getOrderDetail = createAsyncThunk(
    "order/getOrderDetail ",
    async () => {
        try {
            const response = await axiosInstance.get(`order`, {
                headers: { ...authHeader() },
            });
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
);

export const createShipping = createAsyncThunk("order/createShipping", async (id) => {
    try {
        const response = await axiosInstance.post(`shippingAddress`, id);
        return response.data;
    } catch (e) {
        return e.response.data;
    }
});

export const orderSlice = createSlice({
    name: "order",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getOrderDetail.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getOrderDetail.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.banner = action?.payload?.payload.data;
            })
            .addCase(getOrderDetail.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(createShipping.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createShipping.fulfilled, (state, action) => {
                state.status = "succeeded";
            })
            .addCase(createShipping.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default orderSlice.reducer;