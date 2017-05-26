import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import _find from 'lodash/find';
import collectionActions from '../../actions/collection';
import MovieForm from '../../components/MovieForm';
import wrapActionCreators from '../../utils/wrapActionCreators';

import styles from './UpdatePage.scss';


const UpdatePage = ({ updateItem, match, collection }) => {
  const item = _find(collection, { id: match.params.id * 1 });

  return (
    <div className={styles.UpdatePage}>
      <h4>Edit information: {match.params.id}</h4>
      <MovieForm onSubmit={updateItem} data={item} submitLabel="Update" />
    </div>
  );
};

UpdatePage.propTypes = {
  updateItem: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired
};

const connector = connect(
  ({ collection }) => ({
    collection
  }),
  wrapActionCreators(collectionActions)
);

export default connector(UpdatePage);
