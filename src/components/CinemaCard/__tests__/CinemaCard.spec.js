import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CinemaCard from '../index';

describe('<CinemaCard />', () => {
  it('should have a proper markup', () => {
    const tree = renderer.create(
      <MuiThemeProvider>
        <CinemaCard
          title="title"
          quote="quote"
          producer="producer"
          year="year"
          description="description"
        />
      </MuiThemeProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
