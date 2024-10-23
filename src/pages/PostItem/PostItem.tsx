import React from 'react';
import { useParams } from 'react-router-dom';

export default function PostItem() {

    const {id} = useParams()
    return (
        <h1>Post № {id}</h1>
    );
}