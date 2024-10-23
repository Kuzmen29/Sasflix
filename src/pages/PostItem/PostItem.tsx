import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styles from "./PostItem.module.scss";
import { IComment, ICommentsResponse, IPost } from '../../types';
import PostCard from '../../components/PostCard/PostCard';
import Container from '../../components/Container/Container';

export default function PostItem() {

    const [post, setPost] = useState<IPost>()
    const { id } = useParams();
    const [comments, setComments] = useState<IComment[]>();

    useEffect(() => {
        (async () => {
            let response = await fetch('https://dummyjson.com/posts/' + id);
            let posts = await response.json();
            setPost(posts)

            response = await fetch('https://dummyjson.com/posts/' + id + '/comments');
            let comments: ICommentsResponse = await response.json();
            setComments(comments.comments)

        })()
    }, [])

    return (
        <section className={styles.postItem}>
            <Container>
                <div className="">
                    {
                        post && <PostCard post={post} />
                    }
                </div>
                <div className={styles.comments}>

                    <h2 className={styles.comments__header}>
                        {
                            comments?.length
                        } comments
                    </h2>

                    {
                        comments && comments.map((comment: IComment) => (
                            <div className={styles.comment}>
                                <svg className={styles.comment__image} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="23" cy="23" r="20.5" stroke="#05090E" stroke-width="5" stroke-dasharray="20 5" />
                                </svg>
                                <div className={styles.comment__main}>
                                    <div className={styles.comment__content}>
                                        <h2 className={styles.comment__author}>{comment.user.fullName}</h2>
                                        <p className={styles.comment__text}>
                                            {comment.body}
                                        </p>
                                    </div>
                                    <div className={styles.comment__footer}>
                                        <div className={styles.comment__date}>Today</div>
                                        <button className={styles.comment__delete}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>
        </section>
    );
}