import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/base";
import { authHeader, authHeaderSignup, setSession } from "../../helpers/authHelper";

const initialState = {
    user: {},
};

export const logIn = createAsyncThunk("auth/logIn", async (body) => {
    try {
        const response = await axiosInstance.post(`user/signin`, body, {
            headers: authHeader(),
        });
        // console.log("resorder", response);
        return response.data;
    } catch (e) {
        return e.response.data;
    }
});

export const signUp = createAsyncThunk("auth/signUp", async (id) => {
    try {
        const response = await axiosInstance.post(`user/signup`, id, {
            headers: authHeaderSignup(id),
        });
        return response.data;
    } catch (e) {
        return e.response.data;
    }
});

export const resetPassword = createAsyncThunk(
    "auth/resetPassword",
    async (id) => {
        const token = localStorage.getItem("token");
        try {
            const response = await axiosInstance.post(`user/forgot`, id, {
                headers: authHeader(),
            });
            // console.log("resorder", response);
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
);

export const verifyOtp = createAsyncThunk("auth/verifyOtp", async (id) => {
    try {
        const response = await axiosInstance.post(`user/verifyOtp`, id);
        console.log("resorder", response.data.payload.token);
        localStorage.setItem("token", response.data.payload.token);
        return response.data;
    } catch (e) {
        return e.response.data;
    }
});

export const updatePassword = createAsyncThunk(
    "auth/updatePassword",
    async (id) => {
        try {
            const response = await axiosInstance.patch(`user/changePassword`, id, {
                headers: authHeader(),
            });
            // console.log("resorder", response);
            return response.data;
        } catch (e) {
            return e.response.data;
        }
    }
);

export const setSessionData = (token, userInfo) => {
    const sessionData = {
        access_token: token,
        userInfo: userInfo,
    };
    setSession(sessionData);
};

export const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        resetAuth: (state) => {
            state.user = {};
        },
    },
    extraReducers(builder) {
        builder
            .addCase(signUp.pending, (state) => {
                state.status = "loading";
            })
            .addCase(signUp.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action?.payload.payload;
                setSessionData(action?.payload.payload.token, action?.payload.payload);
            })
            .addCase(signUp.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.message;
            })
            .addCase(logIn.pending, (state) => {
                state.status = "loading";
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action?.payload.payload;
                setSessionData(action?.payload.payload.token, action?.payload.payload);
            })
            .addCase(logIn.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })

        // .addCase(updateUser.pending, (state) => {
        //     state.status = "loading";
        // })
        // .addCase(updateUser.fulfilled, (state, action) => {
        //     state.status = "succeeded";
        //     state.user = action?.payload.payload;
        // })
        // .addCase(updateUser.rejected, (state, action) => {
        //     state.status = "failed";
        //     state.error = action.error.message;
        // });
    },
});

export default authSlice.reducer;