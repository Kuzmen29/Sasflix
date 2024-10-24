import { createSlice } from "@reduxjs/toolkit";
import { IPost } from "../types";

function getInitialState(): IPost[] {
    return []
}

export const postsSlice = createSlice({
    name: "posts",
    initialState: getInitialState(),
    reducers: {
        getPosts(state, { payload }) {
            return payload
        },
        toLike(state, { payload }) {


            let post  = state.find(item => item.id === payload.id) as IPost;

            console.log(post.title);

            let obj = {
                    ...post,
                    reactions : {
                        ...post?.reactions,
                        likes : post?.reactions.likes + payload.flag
                    }
                }

            state.splice(state.findIndex((el) => el.id === payload.id), 1, obj) 
        },
        toDislike(state, {payload}){

            
            let post  = state.find(item => item.id === payload.id) as IPost;

            let obj = {
                    ...post,
                    reactions : {
                        ...post?.reactions,
                        dislikes : post?.reactions.dislikes + payload.flag
                    }
                }

            state.splice(state.findIndex((el) => el.id === payload.id), 1, obj) 
        }
    }
})


export const { reducer: postsReducer, actions: postsActions } = postsSlice;