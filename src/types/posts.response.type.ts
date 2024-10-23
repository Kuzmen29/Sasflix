import { IPost } from "./post.type"

export interface IPostsResponse {
    limit: number
    posts: IPost[]
    skip: number
    total: number
}
