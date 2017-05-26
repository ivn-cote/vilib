import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import cssModules from 'react-css-modules';
import collectionActions from '../../actions/collection';
import wrapActionCreators from '../../utils/wrapActionCreators';
import Header from '../../components/Header';
import styles from './App.scss';

@cssModules(styles)
class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    fetch: PropTypes.func.isRequired,
    styles: PropTypes.object
  };

  componentWillMount() {
    this.props.fetch();
  }

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

const connector = connect(
  () => ({}),
  wrapActionCreators(collectionActions)
);

export default connector(App);
