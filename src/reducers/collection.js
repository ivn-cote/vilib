import reduxCrud from 'redux-crud';

const standardReducers = reduxCrud.List.reducersFor('movies');

function reducers(state = [], action) {
  switch (action.type) {

    default:
      return standardReducers(state, action);
  }
}

export default reducers;
