import reduxCrud from 'redux-crud';
const baseActionCreators = reduxCrud.actionCreatorsFor('movies');

const mockMovies = [
  {
    id: 1,
    title: 'Matrix',
    quote: 'There is no spoon',
    producer: 'Vachovsky Brothers',
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
  }
};

export default Object.assign({}, baseActionCreators, actionCreators);
