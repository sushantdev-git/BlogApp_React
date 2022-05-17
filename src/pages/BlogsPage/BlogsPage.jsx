import React from "react";

import BlogCard from "../../component/BlogCard/BlogCard";
import Header from "../../component/Header/Header";
import styles from './BlogsPage.module.css';

import {connect} from 'react-redux'


function BlogList(props) {

    console.log("blog list rendered...")
    const Bloglists = props.blogs.map((blog, ind)=> {
        return <BlogCard title={blog.title} content={blog.content} key={ind} ind={ind}></BlogCard>
    })

    console.log(Bloglists)
    return (
        <div className={styles.BlogPage}>
            <Header />
            <div className={styles.BlogLists}>
                {Bloglists}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogLists.blogs,
    }
}

export default connect(mapStateToProps)(BlogList);