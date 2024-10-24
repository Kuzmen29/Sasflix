import React from 'react';
import styles from "./Posts.module.scss";
import { IPost,  } from '../../types';
import PostCard from '../../components/PostCard/PostCard';
import Container from '../../components/Container/Container';
import usePosts from '../../hooks/usePosts';


export default function Posts() {

    const posts = usePosts();

    return (
        <section className={styles.posts}>
            <Container>
                <div className={styles.posts__list}>
                    {
                        posts.map((post: IPost) => <PostCard key={post.id} post={post} />)
                    }
                </div>
            </Container>
        </section>
    );
}