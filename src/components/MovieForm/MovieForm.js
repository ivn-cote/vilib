import React, { PureComponent } from 'react';
import { autobind, debounce } from 'core-decorators';
import _partial from 'lodash/partial';
import _uniqueId from 'lodash/uniqueId';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { PropTypes } from 'prop-types';

import styles from './MovieForm.scss';

const fieldsModel = [
  {
    hintText: 'Title',
    floatingLabelText: 'Movie Title',
    field: 'title'
  },
  {
    hintText: 'Quote',
    floatingLabelText: 'Movie Quote',
    field: 'quote'
  },
  {
    hintText: 'Producer',
    floatingLabelText: 'Producer',
    field: 'producer'
  },
  {
    hintText: 'Year',
    floatingLabelText: 'Year',
    field: 'year'
  },
  {
    hintText: 'About the movie',
    floatingLabelText: 'Description',
    field: 'description',
    textarea: true
  }
];

class MovieForm extends PureComponent {
  state = {
    id: _uniqueId(),
    title: '',
    quote: '',
    producer: '',
    year: '',
    description: ''
  }

  @autobind
  @debounce
  handleField(fieldName, evt, newValue) {
    this.setState({ [fieldName]: newValue });
  }

  @autobind
  handleSubmit(evt) {
    evt.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  render() {
    return (
      <form className={styles.MovieForm} onSubmit={this.handleSubmit}>
        {
          fieldsModel.map(({ textarea, field, ...other }) => {
            const fieldProps = { ...other, ...(textarea ? { multiLine: true, rows: 4 } : {}) };
            return (
              <TextField
                key={field}
                onChange={_partial(this.handleField, field)}
                {...fieldProps}
                fullWidth
              />
            );
          })
        }

        <RaisedButton
          label="Create"
          fullWidth
          type="submit"
        />
      </form>
    );
  }
}


MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default MovieForm;
