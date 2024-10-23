import { IComment } from "./comment.type"

export interface ICommentsResponse {
    limit: number
    comments: IComment[]
    skip: number
    total: number
}