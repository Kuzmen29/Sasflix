import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./posts.slice";

export const rootReducers = combineReducers({
    posts :  postsReducer,
})

export const store = configureStore({
    reducer : rootReducers
})

export type RootState = ReturnType<typeof store.getState>