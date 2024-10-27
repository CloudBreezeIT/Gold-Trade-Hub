import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";

import axios from '../functions/axios'
import { PRODUCT, USER } from "./URLCONSTANT";


const initialState = {
    data: [],
    loading: false,
    message: null,
    error: null,
    statusCode: null,
    token: localStorage.getItem("token"),
    role: localStorage.getItem("role"),
    signout: false,
};

// *********** RTK Middleware Stare here ***********



// getHomeProducts
export const getHomeProducts = createAsyncThunk(
    "getHomeProducts",
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.get(`${PRODUCT}/get-homepage-products`);
            return {
                data: res.data,
                statusCode: res.status,
            };
        } catch (err) {
            return rejectWithValue({
                error: err.response.data,
                statusCode: err.response.status,
            });
        }
    }
);
// single product
export const getSingleProductBySlug = createAsyncThunk(
    "getSingleProductBySlug",
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.get(`${PRODUCT}/${data}`);
            return {
                data: res.data,
                statusCode: res.status,
            };
        } catch (err) {
            return rejectWithValue({
                error: err.response.data,
                statusCode: err.response.status,
            });
        }
    }
);
// deal
export const createDeal = createAsyncThunk(
    "createDeal",
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post(`deal/create-deal`, data);
            return {
                data: res.data,
                statusCode: res.status,
            };
        } catch (err) {
            return rejectWithValue({
                error: err.response.data,
                statusCode: err.response.status,
            });
        }
    }
);


// *********** RTK Middleware End here ***********

const frontendSlice = createSlice({
    name: "frontend",
    initialState,
    reducers: {
      clearMessage: (state) => {
        state.message = null;
        state.error = null;
        state.statusCode = null;
      },
      resetSignout: (state) => {
        state.signout = false;
      },
      signoutUser: (state) => {
        // localStorage.clear();
        state.token = null;
        state.role = null;
        state.signout = true;
      },
    },
    extraReducers: (builder) => {

        //   *********** user Add-Cases Start Here    ***********
    builder
    .addCase(getHomeProducts.pending, (state) => {
        state.loading = true;
    })
    .addCase(getHomeProducts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload
    })
    .addCase(getHomeProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error?.message;
    })
      .addCase(getSingleProductBySlug.pending, (state) => {
        state.loading = true;
    })
    .addCase(getSingleProductBySlug.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.data = payload
    })
    .addCase(getSingleProductBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error?.message;
    })
      .addCase(createDeal.pending, (state) => {
        state.loading = true;
    })
    .addCase(createDeal.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.message = payload.data?.message;
        state.statusCode = payload?.statusCode;
    })
    .addCase(createDeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error?.message;
    })

            //   ***********    user Add-Cases End Here    ***********

    }
});

export const { clearMessage, resetSignout, signoutUser } = frontendSlice.actions;
export default frontendSlice.reducer;
