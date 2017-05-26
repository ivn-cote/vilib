import React from 'react';
import _partial from 'lodash/partial';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import collectionActions from '../../actions/collection';
import wrapActionCreators from '../../utils/wrapActionCreators';

import styles from './CinemaCard.scss';

const CinemaCard = ({ className, id, title, quote, producer, year, description,
  deleteItem, history }) => (

  <Card className={`${styles.CinemaCard} ${className}`}>
    <CardMedia
      overlay={<CardTitle title={quote} />}
    >
      <img className={styles.CinemaCardImage} src={require('./assets/film-1.svg')} />
    </CardMedia>
    <CardTitle title={title} subtitle={`${producer} ${year}`} />
    <CardText>
      {description}
    </CardText>
    <CardActions>
      <FlatButton label="Update" onClick={() => history.push(`/upd/${id}`)} />
      <FlatButton label="Delete" onClick={_partial(deleteItem, { id })} />
    </CardActions>
  </Card>
);

CinemaCard.propTypes = {
  id: PropTypes.number.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  producer: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

CinemaCard.defaultProps = {
  className: ''
};

const connector = connect(
  () => ({}),
  wrapActionCreators(collectionActions)
);

export default connector(withRouter(CinemaCard));
