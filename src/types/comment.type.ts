
export interface IComment {
    body: string,
    id: number,
    likes : number,
    postId : number,
    
    user : {
        id: number, 
        username: string, 
        fullName: string
    }
}