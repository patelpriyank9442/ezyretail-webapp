import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/base";
import { authHeader } from "../../helpers/authHelper";

const initialState = {
    subCategoryList: [],
};

export const getSubCategoryDetail = createAsyncThunk(
    "subCategory/getSubCategoryDetail ",
    async () => {
        try {
            const response = await axiosInstance.get(`subcategory`, {
                headers: { ...authHeader() },
            });
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
);

export const subCategorySlice = createSlice({
    name: "subCategory",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getSubCategoryDetail.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getSubCategoryDetail.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.banner = action?.payload?.payload.data;
            })
            .addCase(getSubCategoryDetail.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default subCategorySlice.reducer;