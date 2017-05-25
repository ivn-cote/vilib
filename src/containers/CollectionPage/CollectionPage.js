import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import collectionActions from '../../actions/collection';
import wrapActionCreators from '../../utils/wrapActionCreators';
import style from './CollectionPage.scss';

class CollectionPage extends Component {
  componentWillMount() {
    this.props.fetch();
  }

  render() {
    const { collection } = this.props;

    return (
      <div className={style.CollectionPage}>
        <h4>Movie Collection</h4>
        <p>{collection.length} item(s) in your collection</p>
      </div>
    );
  }
}

CollectionPage.propTypes = {
  collection: PropTypes.array.isRequired,
  fetch: PropTypes.func.isRequired
};

const connector = connect(
  ({ collection }) => ({
    collection
  }),
  wrapActionCreators(collectionActions)
);

export default connector(CollectionPage);
