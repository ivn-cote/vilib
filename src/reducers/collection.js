import { handleActions } from 'redux-actions';
import { fetch } from '../actions/collection';

const mockMovies = [
  {
    title: 'Matrix',
    producer: 'Vachovsky Brothers',
    year: 1999,
    rating: 10
  }
];

const initialState = {
  movies: []
};

export default handleActions({
  [fetch]: state => Object.assign({}, state, { movies: mockMovies })
}, initialState);
