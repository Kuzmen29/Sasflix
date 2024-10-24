import { createSlice } from "@reduxjs/toolkit";


export const commentsSlice = createSlice({
    name : "comments",
    initialState: [],
    reducers: {
        getComments(state, {payload}) {
            return payload
        }
    }
})


export const {reducer : commentsReducer, actions : commentsActions} = commentsSlice;