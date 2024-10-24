import React, { useState } from 'react';
import styles from "./Comment.module.scss";
import { IComment } from '../../types';

interface ICommentProps {
    comment: IComment
}

export default function Comment({ comment }: ICommentProps) {

    const [basket, setBasket] = useState<{ [key: number]: IComment | undefined }>({});

    function toBasket(comment: IComment) {
        setBasket({ ...basket, [comment.id]: comment });
    }

    function returnFromBasket(comment: IComment) {
        setBasket({ ...basket, [comment.id]: undefined });
    }

    return (
        <div key={comment.id} className={styles.comment}>
            <svg className={styles.comment__image} width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="23" cy="23" r="20.5" stroke="#05090E" strokeWidth="5" strokeDasharray="20 5" />
            </svg>
            {
                basket[comment.id] === undefined
                    ? <div className={styles.comment__content}>
                        <div className={styles.comment__main}>
                            <h2 className={styles.comment__author}>
                                {comment.user.fullName}
                                {
                                    false
                                        ? <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 0C8.58333 0 9.10417 0.145833 9.5625 0.4375C10.0208 0.729167 10.3854 1.11458 10.6562 1.59375C11.1771 1.44792 11.7083 1.4375 12.25 1.5625C12.7708 1.66667 13.2396 1.92708 13.6562 2.34375C14.0729 2.76042 14.3333 3.23958 14.4375 3.78125C14.5625 4.30208 14.5521 4.82292 14.4062 5.34375C14.8854 5.61458 15.2708 5.97917 15.5625 6.4375C15.8542 6.89583 16 7.41667 16 8C16 8.58333 15.8542 9.10417 15.5625 9.5625C15.2708 10.0208 14.8854 10.3854 14.4062 10.6562C14.5521 11.1771 14.5625 11.7083 14.4375 12.25C14.3333 12.7708 14.0729 13.2396 13.6562 13.6562C13.2396 14.0729 12.7708 14.3333 12.25 14.4375C11.7083 14.5625 11.1771 14.5521 10.6562 14.4062C10.3854 14.8854 10.0208 15.2708 9.5625 15.5625C9.10417 15.8542 8.58333 16 8 16C7.41667 16 6.89583 15.8542 6.4375 15.5625C5.97917 15.2708 5.61458 14.8854 5.34375 14.4062C4.82292 14.5521 4.29167 14.5625 3.75 14.4375C3.22917 14.3333 2.76042 14.0729 2.34375 13.6562C1.92708 13.2396 1.66667 12.7708 1.5625 12.25C1.4375 11.7083 1.44792 11.1771 1.59375 10.6562C1.11458 10.3854 0.729167 10.0208 0.4375 9.5625C0.145833 9.10417 0 8.58333 0 8C0 7.41667 0.145833 6.89583 0.4375 6.4375C0.729167 5.97917 1.11458 5.61458 1.59375 5.34375C1.44792 4.82292 1.4375 4.29167 1.5625 3.75C1.66667 3.22917 1.92708 2.76042 2.34375 2.34375C2.76042 1.92708 3.23958 1.66667 3.78125 1.5625C4.30208 1.4375 4.82292 1.44792 5.34375 1.59375C5.61458 1.11458 5.97917 0.729167 6.4375 0.4375C6.89583 0.145833 7.41667 0 8 0ZM11.5312 6.53125C11.8229 6.17708 11.8229 5.82292 11.5312 5.46875C11.1771 5.17708 10.8229 5.17708 10.4688 5.46875L7 8.9375L5.53125 7.46875C5.17708 7.17708 4.82292 7.17708 4.46875 7.46875C4.17708 7.82292 4.17708 8.17708 4.46875 8.53125L6.46875 10.5312C6.82292 10.8229 7.17708 10.8229 7.53125 10.5312L11.5312 6.53125Z" fill="#FF6B00" />
                                        </svg>
                                        : undefined
                                }
                                <div className={styles.comment__replyTo}>
                                    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 0.5V6C1.02083 6.41667 1.16667 6.77083 1.4375 7.0625C1.72917 7.33333 2.08333 7.47917 2.5 7.5H14.2812L11.1562 4.34375C10.9479 4.11458 10.9479 3.88542 11.1562 3.65625C11.3854 3.44792 11.6146 3.44792 11.8438 3.65625L15.8438 7.65625C16.0521 7.88542 16.0521 8.11458 15.8438 8.34375L11.8438 12.3438C11.6146 12.5521 11.3854 12.5521 11.1562 12.3438C10.9479 12.1146 10.9479 11.8854 11.1562 11.6562L14.2812 8.5H2.5C1.79167 8.47917 1.19792 8.23958 0.71875 7.78125C0.260417 7.30208 0.0208333 6.70833 0 6V0.5C0.0208333 0.1875 0.1875 0.0208333 0.5 0C0.8125 0.0208333 0.979167 0.1875 1 0.5Z" fill="#040405" fillOpacity="0.22" />
                                    </svg>
                                    <h2 className={styles["comment__replyTo-name"]}>{comment.user.fullName}</h2>
                                </div>
                            </h2>
                            <p className={styles.comment__text}>
                                {comment.body}

                            </p>
                        </div>
                        <div className={styles.comment__footer}>
                            <div className={styles.comment__date}>Today</div>
                            <button
                                className={styles.comment__delete}
                                onClick={() => toBasket(comment)}
                            >Delete</button>
                        </div>
                    </div>
                    :
                    <div className={styles.comment__content}>
                        <div className={styles.comment__main}>
                            <h2 className={styles.comment__author}>{comment.user.fullName}</h2>
                            <p className={styles.comment__text}>
                                This comment has been deleted. <button
                                    className={styles.comment__return}
                                    onClick={() => returnFromBasket(comment)}
                                >Return</button>
                            </p>
                        </div>
                    </div>
            }
        </div>
    );
}