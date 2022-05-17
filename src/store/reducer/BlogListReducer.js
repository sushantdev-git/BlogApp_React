const initialState = {
    blogs: [
        {
            title: "This is best react post",
            categories: "React Frontend",
            content: "With this new exciting feature, React will combine multiple setState() calls into a single re-render to improve performance. Before this, if we had multiple setState() inside of a setTimeout(), React will re-render for every state update which sometimes causes performance issues if we have larger components.You may already be familiar with this. This feature was available in React 17, but now it comes out-of-the-box."
        },
        {
            title: "This is best react post",
            categories: "React Frontend",
            content: "This is a blog...."
        },
        {
            title: "This is best react post",
            categories: "React Frontend",
            content: "This is a blog...."
        },
        {
            title: "This is best react post",
            categories: "React Frontend",
            content: "This is a blog...."
        }
    ]
}

const addNewBlog = (state, blog) => {
    let blogs = state.blogs;
    blogs.push(blog);
    return {
        ...state,
        blogs:[
            ...blogs,
        ]
    }
}

const updateBlog = (state, blog, blogId) => {
    let blogs = state.blogs;
    blogs[blogId] = blog;

    console.log("updating blog")
    console.log(blogs)
    return {
        ...state,
        blogs:[
            ...blogs,
        ]
    }
}

const deleteBlog = (state, blogId) => {
    let blogs = [];

    for(let i=0; i<state.blogs.length; i++){
        if(i == blogId) continue;
        else blogs.push(state.blogs[i]);
    }

    return {
        ...state,
        blogs:[
            ...blogs,
        ]
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_NEW":
            return addNewBlog(state,action.data)
        case "UPDATE":
            return updateBlog(state,action.data, action.blogId)
        case "DELETE":
            return deleteBlog(state,action.blogId)
        default:
            return state;
    }
}

export default reducer;