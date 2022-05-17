import React, {useState} from "react";
import styles from './createBlogPage.module.css';
import Header from "../../component/Header/Header";

import {connect} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom'


function CreateBlogPage(props) {

    

    let navigate = useNavigate();
    let location = useLocation();
    const [title, setTitle] = useState("");
    const [categories, setCategories] = useState("");
    const [content, setContent] = useState("");
    const [fetched, setFetched] = useState(false)

    let blogId = null;

    if(location.state && location.state.blogId != null) blogId = location.state.blogId;

    
    if(blogId != null && !fetched){
        let blog = props.blogs[blogId];
        setTitle(blog.title);
        setCategories(blog.categories);
        setContent(blog.content);
        setFetched(true)
    }

    const onSubmit = () => {

        console.log("on submit called")
        const data = {
            title: title,
            categories: categories,
            content: content,
        }


        if(blogId != null) props.onUpdate(data, blogId)
        else props.onSubmit(data);
        
        navigate('/home', { replace: true }); 
    }

    return(
        <div className={styles.CreateBlogPage}>
            <Header />
            <div className={styles.CreateBlog}>
                <h1>Title</h1>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

                <h1>Categories</h1>
                <input type="text" value={categories} onChange={(e) => setCategories(e.target.value)}/>

                <h1>Content</h1>
                <textarea value={content} onChange={(e) => setContent(e.target.value)}>

                </textarea>

                <div>
                    <button onClick={onSubmit}>Submit</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        blogs: state.blogLists.blogs,
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        onSubmit: (data) => dispatch({
            type: "ADD_NEW",
            data: data,
        }),

        onUpdate: (data, blogId) => dispatch({
            type: "UPDATE",
            data: data,
            blogId: blogId,
        })
    }
}

export default connect(mapStateToProps, mapDispathToProps)(CreateBlogPage);