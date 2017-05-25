import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
// required for MUI
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import routes from '../config/routes.js';

export default class Root extends Component {
  componentDidMount() {
    injectTapEventPlugin();
  }

  render() {
    const { store, history } = this.props;

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App>{routes}</App>
        </ConnectedRouter>
      </Provider>
    );
  }
}
Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
