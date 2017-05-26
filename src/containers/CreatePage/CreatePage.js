import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import collectionActions from '../../actions/collection';
import MovieForm from '../../components/MovieForm';
import wrapActionCreators from '../../utils/wrapActionCreators';

import styles from './CreatePage.scss';


const CreatePage = ({ create, history }) => (
  <div className={styles.CreatePage}>
    <h4>Add a new movie:</h4>
    {/* history shoud not be here, but there is a bug, see action/collection.js */}
    <MovieForm onSubmit={(data) => {
      history.goBack();
      create(data);
    }}
    />
  </div>
);

CreatePage.propTypes = {
  create: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

const connector = connect(
  () => ({}),
  wrapActionCreators(collectionActions)
);

export default connector(CreatePage);
