import {combineReducers} from 'redux'
import authReducer from './auth/auth.reducer'
import categoriesReducer from './categories/categories.reducer'
import postsReducer from './posts/posts.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer,
  posts: postsReducer
});

export default rootReducer;