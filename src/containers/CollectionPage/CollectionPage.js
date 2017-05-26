import React, { Component } from 'react';
import { autobind } from 'core-decorators';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import CollectionControl from '../../components/CollectionControl';
import MoviesList from '../../components/MoviesList';
import styles from './CollectionPage.scss';

class CollectionPage extends Component {
  @autobind
  goCreate() {
    this.props.history.push('/create');
  }

  render() {
    const { collection } = this.props;

    return (
      <div className={styles.CollectionPage}>
        <CollectionControl onAdd={this.goCreate} />
        <MoviesList list={collection} />
      </div>
    );
  }
}

CollectionPage.propTypes = {
  collection: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

const connector = connect(
  ({ collection }) => ({
    collection
  })
);

export default connector(CollectionPage);
