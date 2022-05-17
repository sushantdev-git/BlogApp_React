import React from "react";

import styles from './BlogPage.module.css'
import Header from "../../component/Header/Header";

import {useLocation} from 'react-router-dom'
import {connect} from 'react-redux';


function BlogPage (props) {

    let blogId = useLocation().state.blogId;
    let blog = props.blogs[blogId];

    return (
        <div className={styles.BlogPage}>
            <Header />
            <div className={styles.Display}>
                <h1>{blog.title}</h1>
                <h3>{blog.categories}</h3>
                <p>{blog.content}</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        blogs: state.blogLists.blogs,
    }
}

export default connect(mapStateToProps)(BlogPage);