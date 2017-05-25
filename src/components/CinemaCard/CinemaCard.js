import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import styles from './CinemaCard.scss';

const CinemaCard = ({ title, quote, producer, year, description }) => (
  <Card>
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
      <FlatButton label="Update" />
      <FlatButton label="Delete" />
    </CardActions>
  </Card>
);

CinemaCard.propTypes = {
  title: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  producer: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default CinemaCard;
