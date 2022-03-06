import { combineReducers } from 'redux';
import authReducer from './authReducer';
import todos from './todos';

const reducers = combineReducers({
  auth: authReducer,
  todos,
});

export default reducers;
