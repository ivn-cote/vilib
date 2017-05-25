// TODO
//import { handleActions } from 'redux-actions';
// export default handleActions({
//   [increment]: state => state + 1,
//   [decrement]: state => state - 1
// }, initialState);

import reduxCrud from 'redux-crud';
import { increment, decrement } from '../actions/counter';

const toIncrement = increment().type;
const toDecrement = decrement().type;

const baseReducers = reduxCrud.List.reducersFor('movies');
const initState = {
  counterValue: 0
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case toIncrement:
      return Object.assign({}, state, { counterValue: state.counterValue + 1 });
    case toDecrement:
      return Object.assign({}, state, { counterValue: state.counterValue - 1 });
    default:
      return baseReducers(state, action);
  }
}
