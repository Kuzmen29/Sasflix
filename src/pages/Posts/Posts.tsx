import React, { useEffect, useState } from 'react';
import styles from "./Posts.module.scss";
import { IPost, IPostsResponse } from '../../types';
import PostCard from '../../components/PostCard/PostCard';
import Container from '../../components/Container/Container';

export default function Posts() {

    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        (async () => {
            let response = await fetch('https://dummyjson.com/posts?limit=5');
            let posts: IPostsResponse = await response.json();
            setPosts(posts.posts)
        })()
    }, [])
    return (
        <section className={styles.posts}>
            <Container>
                <div className={styles.posts__list}>
                    {
                        posts.map((post: IPost) => <PostCard post={post} />)
                    }
                </div>
            </Container>
        </section>
    );
}