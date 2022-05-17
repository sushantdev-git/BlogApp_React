import React from "react";
import styles from './Header.module.css';

import {useNavigate, useLocation, router} from 'react-router-dom';
import {connect} from 'react-redux';

function Header(props){

    let navigate = useNavigate();
    let location = useLocation();

    let headerContent = null;

    if(location.pathname == '/home'){
        headerContent = (
            <div className={styles.BlogsHeader}>
                <button onClick={() => {
                    navigate('/post',)
                }}>New Post</button>
            </div>
        )
    }
    else if(location.pathname == '/blog'){

        const onDelete = (blogId) => {
            props.onDelete(blogId);
            navigate('/home')
        }

        headerContent = (
            <div className={styles.BlogHeader}>
                <div>
                    <button onClick={() => {
                        navigate('/home',)
                    }}>Back to Index</button>
                </div>
                <div>
                    <button>Like</button>

                    <button onClick={() => {
                        navigate('/post', {state: {
                            blogId: location.state.blogId,
                        }})
                    }}>Edit</button>

                    <button onClick={() => onDelete(location.state.blogId)}>Delete</button>
                </div>
            </div>
        )
    }
    else{
        headerContent = (
            <div className={styles.CreateHeader}>
                <button onClick={() => {
                    navigate('/home', {replace:true})
                }}>Back to Index</button>
            </div>
        )
    }
    
    return(
        <div className={styles.Header}>
            {headerContent}
        </div>
    )
}

const mapDispathToProps = dispatch => {
    return {
        onDelete : (blogId) => dispatch({
            type: "DELETE",
            blogId: blogId,
        })
    }
}
export default connect(null, mapDispathToProps)(Header);