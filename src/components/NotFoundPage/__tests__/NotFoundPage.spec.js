import React from 'react';
import renderer from 'react-test-renderer';
import NotFoundPage from '../index';

describe('<NotFoundPage />', () => {
  it('should have a proper markup', () => {
    const tree = renderer.create(
      <NotFoundPage />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
