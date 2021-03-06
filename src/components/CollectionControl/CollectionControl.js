import React from 'react';
import { PropTypes } from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import styles from './CollectionControl.scss';


const CollectionControl = ({ onAdd }) => (
  <div className={styles.CollectionControl} onClick={onAdd}>
    <FloatingActionButton secondary className={styles.CreateBtn}>
      <ContentAdd />
    </FloatingActionButton>
  </div>
);


CollectionControl.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default CollectionControl;
