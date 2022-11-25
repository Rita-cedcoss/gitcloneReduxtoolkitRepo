import { configureStore } from "@reduxjs/toolkit";
import  githubSliceReducer from "../features/Github_Clone/githubSlice";
export const store=configureStore({
    reducer:{
        githubSliceReducer
    }
})