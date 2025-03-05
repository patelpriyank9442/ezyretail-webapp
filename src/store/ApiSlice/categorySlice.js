import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/base";
import { authHeader } from "../../helpers/authHelper";

const initialState = {
    categoryList: [],
};

export const getCategory = createAsyncThunk(
    "category/getCategory ",
    async () => {
        try {
            const response = await axiosInstance.get(`category`, {
                headers: { ...authHeader() },
            });
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
);

export const categorySlice = createSlice({
    name: "category",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getCategory.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.categoryList = action?.payload?.payload.data;
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default categorySlice.reducer;