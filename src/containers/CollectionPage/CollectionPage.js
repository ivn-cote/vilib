import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import CinemaCard from '../../components/CinemaCard';
import collectionActions from '../../actions/collection';
import wrapActionCreators from '../../utils/wrapActionCreators';
import styles from './CollectionPage.scss';

class CollectionPage extends Component {
  componentWillMount() {
    console.log( this.props)
    this.props.fetch();
  }

  render() {
    const { collection, create } = this.props;

    return (
      <div className={styles.CollectionPage}>
        <FloatingActionButton secondary className={styles.CreateBtn} onClick={create}>
          <ContentAdd />
        </FloatingActionButton>

        <h4>Movie Collection</h4>
        {
          collection.map(item => <CinemaCard key={item.id} {...item} />)
        }
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
