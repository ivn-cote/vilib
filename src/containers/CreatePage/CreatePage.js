import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import collectionActions from '../../actions/collection';
import MovieForm from '../../components/MovieForm';
import wrapActionCreators from '../../utils/wrapActionCreators';

import styles from './CreatePage.scss';


const CreatePage = ({ createStart }) => (
  <div className={styles.CreatePage}>
    <h4>Add a new movie:</h4>
    <MovieForm onSubmit={createStart} />
  </div>
);

CreatePage.propTypes = {
  createStart: PropTypes.func.isRequired
};

const connector = connect(
  ({ collection }) => ({
    collection
  }),
  wrapActionCreators(collectionActions)
);

export default connector(CreatePage);
