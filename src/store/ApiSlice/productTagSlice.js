import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/base";
import { authHeader } from "../../helpers/authHelper";

const initialState = {
    productTagDetail: [],
};

export const getProductTagList = createAsyncThunk(
    "productTag/getProductTagList ",
    async () => {
        try {
            const response = await axiosInstance.get(`productTags`, {
                headers: { ...authHeader() },
            });
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
);

export const productTagSlice = createSlice({
    name: "productTag",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getProductTagList.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getProductTagList.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.productTagDetail = action?.payload?.payload.data;
            })
            .addCase(getProductTagList.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default productTagSlice.reducer;