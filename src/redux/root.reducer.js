import {combineReducers} from 'redux'
import authReducer from './auth/auth.reducer'
import categoriesReducer from './categories/categories.reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoriesReducer
});

export default rootReducer;