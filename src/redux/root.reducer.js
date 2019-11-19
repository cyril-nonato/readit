import {combineReducers} from 'redux'
import authReducer from './auth/auth.reducer'
import postsReducer from './posts/posts.reducer';
import votesReducer from './votes/votes.reducer';
import crudPostReducer from './crud-post/crud-post.reducer';
import subReaditReducer from './sub-readit/sub-readit.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  votes: votesReducer,
  crudPost: crudPostReducer,
  subReadit: subReaditReducer
});

export default rootReducer;