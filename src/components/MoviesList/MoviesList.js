import React from 'react';
import { PropTypes } from 'prop-types';
import CinemaCard from '../../components/CinemaCard';

import styles from './MoviesList.scss';

const MoviesList = ({ list }) => (
  <div className={styles.MoviesList}>
    <h4>Movie Collection</h4>
    {
      list.map(item => <CinemaCard className={styles.item} key={item.id} {...item} />)
    }
    <p>{list.length} item(s) in your collection</p>
  </div>
);


MoviesList.propTypes = {
  list: PropTypes.array.isRequired
};

export default MoviesList;
