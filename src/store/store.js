import { createStore , combineReducers} from "redux";

import BlogListReducer from './reducer/BlogListReducer'

const rootReducer = combineReducers({
    blogLists: BlogListReducer,  
})

const store = createStore(rootReducer)

export default store;