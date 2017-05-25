import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import collection from './collection';

const rootReducer = combineReducers({
  collection,
  routing
});

export default rootReducer;
