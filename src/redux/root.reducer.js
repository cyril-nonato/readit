import {combineReducers} from 'redux'
import authReducer from './auth/auth.reducer'
import postsReducer from './posts/posts.reducer';
import votesReducer from './votes/votes.reducer';
import crudPostReducer from './crud-post/crud-post.reducer';
import subReaditReducer from './sub-readit/sub-readit.reducer';
import commentsReducer from './comment/comment.reducer';
import subNavigationReducer from './sub-navigation/sub-navigation.reducer';
import themeReducer from './theme/theme.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  votes: votesReducer,
  crudPost: crudPostReducer,
  subReadit: subReaditReducer,
  comment: commentsReducer,
  subNavigation: subNavigationReducer,
  theme: themeReducer
});

export default rootReducer;