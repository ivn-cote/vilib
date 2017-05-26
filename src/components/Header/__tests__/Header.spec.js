import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../index';

describe('<Header />', () => {
  it('should have a proper markup', () => {
    const tree = renderer.create(
      <MuiThemeProvider>
        <Header />
      </MuiThemeProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
