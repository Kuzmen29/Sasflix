import { IPost } from "../types";
import { useTypedSelector } from "./useTypedSelector";

export default function usePosts() : IPost[] {
    
    const posts = useTypedSelector(state=>state.posts);

    return posts;
}