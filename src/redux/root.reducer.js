import {combineReducers} from 'redux'
import authReducer from './auth/auth.reducer'
import postsReducer from './posts/posts.reducer';
import votesReducer from './votes/votes.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  votes: votesReducer
});

export default rootReducer;