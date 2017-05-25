import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import collection from './collection';

const rootReducer = combineReducers({
  collection,
  counter,
  routing
});

export default rootReducer;
