import React, { PureComponent } from 'react';
import { autobind, debounce } from 'core-decorators';
import _partial from 'lodash/partial';
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
  constructor(props) {
    super(props);

    this.state = Object.assign({
      id: Date.now(),
      title: '',
      quote: '',
      producer: '',
      year: '',
      description: ''
    }, props.data);
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
    const { submitLabel } = this.props;

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
                defaultValue={this.state[field]}
                fullWidth
              />
            );
          })
        }

        <RaisedButton
          label={submitLabel}
          type="submit"
          fullWidth
        />
      </form>
    );
  }
}


MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string
};

MovieForm.defaultProps = {
  submitLabel: 'Create'
};

export default MovieForm;
