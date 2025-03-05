import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/base";
import { authHeader } from "../../helpers/authHelper";

const initialState = {
    productDetail: [],
    productFilter: [],
    productVariantDetail: [],
    productAttributeDetail: [],
};

export const getProductDetail = createAsyncThunk(
    "product/getProductDetail ",
    async () => {
        try {
            const response = await axiosInstance.get(`product`, {
                headers: { ...authHeader() },
            });
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
);

export const getProductFilterDetail = createAsyncThunk(
    "product/getProductFilterDetail ",
    async ({ ctegoryId, collectionId, fabricId, sizeId, value }) => {
        try {
            let queryParams = [];

            if (ctegoryId) queryParams.push(`categoryId=${ctegoryId}`);
            if (collectionId) queryParams.push(`productTags=${collectionId}`);
            // if (fabricId) queryParams.push(`productTags=${fabricId}`);
            if (sizeId) queryParams.push(`sizes=${sizeId}`);
            if (value.min !== undefined && value.min !== null) queryParams.push(`minPrice=${value.min}`);
            if (value.max !== undefined && value.max !== null) queryParams.push(`maxPrice=${value.max}`);

            const queryString = queryParams.length > 0 ? `?${queryParams.join("&")}` : "";
            const response = await axiosInstance.get(`product${queryString}`, {
                headers: { ...authHeader() },
            });
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
);

export const getProductVariant = createAsyncThunk(
    "product/getProductVariant ",
    async () => {
        try {
            const response = await axiosInstance.get(`product-variants`, {
                headers: { ...authHeader() },
            });
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
);

export const getProductAttribute = createAsyncThunk(
    "product/getProductAttribute ",
    async () => {
        try {
            const response = await axiosInstance.get(`product-attribute`, {
                headers: { ...authHeader() },
            });
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
);

export const productSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getProductDetail.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getProductDetail.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.productDetail = action?.payload?.payload.data;
            })
            .addCase(getProductDetail.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(getProductFilterDetail.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getProductFilterDetail.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.productFilter = action?.payload?.payload.data;
            })
            .addCase(getProductFilterDetail.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(getProductVariant.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getProductVariant.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.productVariantDetail = action?.payload?.payload.data;
            })
            .addCase(getProductVariant.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(getProductAttribute.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getProductAttribute.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.productAttributeDetail = action?.payload?.payload.data;
            })
            .addCase(getProductAttribute.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;