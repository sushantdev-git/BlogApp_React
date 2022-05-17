import React from "react";

import styles from './BlogCard.module.css';

import {useNavigate} from 'react-router-dom'

function BlogCard (props) {

    let navigate = useNavigate();

    return (
        <div className={styles.BlogCard} onClick={() => navigate('/blog', { state: { blogId: props.ind } })}>
            <h1>{props.title}</h1>
        </div>
    )
}

export default BlogCard;