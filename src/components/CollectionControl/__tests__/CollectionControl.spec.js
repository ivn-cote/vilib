import React from 'react';
import renderer from 'react-test-renderer';
import _noop from 'lodash/noop';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CollectionControl from '../index';

describe('<CollectionControl />', () => {
  it('should have a proper markup', () => {
    const tree = renderer.create(
      <MuiThemeProvider>
        <CollectionControl
          onAdd={_noop}
        />
      </MuiThemeProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
