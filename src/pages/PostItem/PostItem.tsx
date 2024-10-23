import React from 'react';
import { useParams } from 'react-router-dom';
import styles from "./PostItem.module.scss";

export default function PostItem() {

    const {id} = useParams();

    return (
        <section className={styles.postItem}>
            {id}
        </section>
    );
}