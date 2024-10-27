import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'


const store = configureStore({
    reducer: {
        user: userReducer // Using the reducer directly
    }
});

export default store;