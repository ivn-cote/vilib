import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as CollectionActions from '../../actions/collection';
import wrapActionCreators from '../../utils/wrapActionCreators';

import style from './CollectionPage.scss';

class CollectionPage extends Component {
  componentWillMount() {
    this.props.fetch();
  }

  render() {
    const { collection: { movies } } = this.props;

    return (
      <div className={style.CollectionPage}>
        <h4>Movie Collection</h4>
        <p>There are {movies.length} items in your collection</p>
      </div>
    );
  }
}

CollectionPage.propTypes = {
  collection: PropTypes.object.isRequired,
  fetch: PropTypes.func.isRequired
};

const connector = connect(
  state => ({
    collection: state.collection
  }),
  wrapActionCreators(CollectionActions)
);

export default connector(CollectionPage);
