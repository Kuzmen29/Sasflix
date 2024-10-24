import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./PostItem.module.scss";
import { IComment, ICommentsResponse, IPost } from '../../types';
import PostCard from '../../components/PostCard/PostCard';
import Container from '../../components/Container/Container';
import Comment from '../../components/Comment/Comment';
import usePosts from '../../hooks/usePosts';

export default function PostItem() {

    const { id } = useParams();

    const posts = usePosts();

    const post: IPost | undefined = function () {

        if (id) {
            return posts.find(item => item.id === +id);
        }
        
        return undefined
    }()

    const [comments, setComments] = useState<IComment[]>();

    useEffect(() => {
        (async () => {
            let response = await fetch('https://dummyjson.com/posts/' + id + '/comments');
            let comments: ICommentsResponse = await response.json();
            setComments(comments.comments)
        })()
    }, [])

    return (
        <section className={styles.postItem}>
            <Container>

                <div className="">
                    {
                        post && <PostCard key={post.id} post={post} />
                    }
                </div>

                <div className={styles.comments}>

                    <h2 className={styles.comments__header}>
                        {
                            comments?.length
                        } comments
                    </h2>

                    {
                        comments && comments.map((comment: IComment) => <Comment key={comment.id} comment={comment} />)
                    }
                </div>
            </Container>
        </section>
    );
}