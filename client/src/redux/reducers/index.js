import { combineReducers } from 'redux';
import Auth from './loginReducer';
import todoReducer from './todoReducer';
const rootReducer = combineReducers({
  auth: Auth,
  todo:todoReducer
});

export default rootReducer;
