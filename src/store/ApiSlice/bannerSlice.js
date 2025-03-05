import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/base";
import { authHeader } from "../../helpers/authHelper";

const initialState = {
    banner: [],
    favoriteProduct: []
};

export const getBanner = createAsyncThunk(
    "banner/getBanner ",
    async () => {
        try {
            const response = await axiosInstance.get(`heroSection?IsActive=true`, {
                headers: { ...authHeader() },
            });
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
);

export const getFavoriteProduct = createAsyncThunk(
    "banner/getFavoriteProduct ",
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

export const createFavoriteProduct = createAsyncThunk(
    "banner/createFavoriteProduct ",
    async (id) => {
        try {
            const payload = {
                productId: id
            }
            const response = await axiosInstance.post(`favorite`, payload, {
                headers: { ...authHeader() },
            });
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
);

export const bannerSlice = createSlice({
    name: "banner",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getBanner.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getBanner.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.banner = action?.payload?.payload.data;
            })
            .addCase(getBanner.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
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

export default bannerSlice.reducer;