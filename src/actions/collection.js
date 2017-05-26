import reduxCrud from 'redux-crud';
import _uniqueId from 'lodash/uniqueId';
const baseActionCreators = reduxCrud.actionCreatorsFor('movies');

const mockMovies = [
  {
    id: 42,
    title: 'Matrix',
    quote: 'There is no spoon',
    producer: 'Wachowsky',
    year: 1999,
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

  create() {
    return function createAction(dispatch) {
      const virtualMovie = Object.assign({}, mockMovies[0], { id: _uniqueId() });
      dispatch(baseActionCreators.createStart(virtualMovie));
      setTimeout(() => dispatch(baseActionCreators.createSuccess(virtualMovie)), 1000);
    };
  }
};

export default Object.assign({}, baseActionCreators, actionCreators);
