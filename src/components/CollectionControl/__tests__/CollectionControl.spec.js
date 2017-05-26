import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
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

  it('should have a proper markup', () => {
    const addHandler = jest.fn();
    const wrapper = shallow(
      <CollectionControl onAdd={addHandler} />
    );

    wrapper.simulate('click');
    expect(addHandler).toHaveBeenCalled();
  });
});
