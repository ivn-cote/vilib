import reduxCrud from 'redux-crud';
import { push, goBack } from 'react-router-redux';
const baseActionCreators = reduxCrud.actionCreatorsFor('movies');

const mockMovies = [
  {
    id: 42,
    title: 'Matrix',
    quote: 'There is no spoon',
    producer: 'Wachowsky',
    year: '1999',
    description: 'nerdy overengineering film'
  }
];

const actionCreators = {
  fetch() {
    return function updateAction(dispatch) {
      dispatch(baseActionCreators.fetchStart());
      setTimeout(() => dispatch(baseActionCreators.fetchSuccess(mockMovies)), 1000);
    };
  },

  deleteItem(recordToDelete) {
    return function deleteAction(dispatch) {
      dispatch(baseActionCreators.deleteStart(recordToDelete));
      setTimeout(() => dispatch(baseActionCreators.deleteSuccess(recordToDelete)), 1000);
    };
  },

  updateItem(recordToUpd) {
    return function updateAction(dispatch) {
      dispatch(baseActionCreators.updateStart(recordToUpd));
      setTimeout(() => {
        dispatch(baseActionCreators.updateSuccess(recordToUpd));
        // seems like a bug: URI is changing, but ReactRouter do not react
        // dispatch(goBack());
      }, 300);
    };
  },

  create(newRecord) {
    return function createAction(dispatch) {
      dispatch(baseActionCreators.createStart(newRecord));

      setTimeout(() => {
        dispatch(baseActionCreators.createSuccess(newRecord));
        // dispatch(goBack());
      }, 300);
    };
  }
};

export default Object.assign({}, baseActionCreators, actionCreators);
