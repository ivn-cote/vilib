import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import cssModules from 'react-css-modules';
import Header from '../../components/Header';
import styles from './App.scss';

@cssModules(styles)
export default class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    styles: PropTypes.object
  };

  render() {
    const { children, styles } = this.props;

    return (
      <MuiThemeProvider>
        <div className={styles.container}>
            <Header />

            {children}
        </div>
      </MuiThemeProvider>
    );
  }
}
