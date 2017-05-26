import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import CollectionControl from '../../components/CollectionControl';
import MoviesList from '../../components/MoviesList';
import collectionActions from '../../actions/collection';
import wrapActionCreators from '../../utils/wrapActionCreators';
import styles from './CollectionPage.scss';

class CollectionPage extends Component {
  componentWillMount() {
    this.props.fetch();
  }

  render() {
    const { collection, create } = this.props;

    return (
      <div className={styles.CollectionPage}>
        <CollectionControl onAdd={create} />
        <MoviesList list={collection} />
      </div>
    );
  }
}

CollectionPage.propTypes = {
  collection: PropTypes.array.isRequired,
  fetch: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired
};

const connector = connect(
  ({ collection }) => ({
    collection
  }),
  wrapActionCreators(collectionActions)
);

export default connector(CollectionPage);
