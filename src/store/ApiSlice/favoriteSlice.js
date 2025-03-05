import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/base";
import { authHeader } from "../../helpers/authHelper";

const initialState = {
    favoriteProduct: [],
};

export const getFavoriteProduct = createAsyncThunk(
    "favorite/getFavoriteProduct ",
    async () => {
        try {
            const response = await axiosInstance.get(`favorite`, {
                headers: { ...authHeader() },
            });
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
);

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getFavoriteProduct.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getFavoriteProduct.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.favoriteProduct = action?.payload?.payload.data;
            })
            .addCase(getFavoriteProduct.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default favoriteSlice.reducer;