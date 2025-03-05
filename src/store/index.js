import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import bannerSlice from "./ApiSlice/bannerSlice";
import storage from "redux-persist/lib/storage";
import productSlice from "./ApiSlice/productSlice";
import categorySlice from "./ApiSlice/categorySlice";
import productTagSlice from "./ApiSlice/productTagSlice";
import subCategorySlice from "./ApiSlice/subCategorySlice";
import favoriteSlice from "./ApiSlice/favoriteSlice";
import authSlice from "./ApiSlice/authSlice";
import orderSlice from "./ApiSlice/orderSlice";
import cartSlice from "./ApiSlice/cartSlice";
import shippingAddressSlice from "./ApiSlice/shippingAddressSlice";


const reducers = combineReducers({
    auth: authSlice,
    banner: bannerSlice,
    product: productSlice,
    category: categorySlice,
    subcategory: subCategorySlice,
    productTag: productTagSlice,
    favorite: favoriteSlice,
    order: orderSlice,
    cart: cartSlice,
    shippingAddress: shippingAddressSlice
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: [
        "auth",
        "banner",
        "product",
        "category",
        "productTag",
        "subcategory",
        "favorite",
        "order",
        "cart",
        "shippingAddress"
    ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            // {
            //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            // },
        }),
    // devTools: false,
});

export const persistor = persistStore(store);
export default store;