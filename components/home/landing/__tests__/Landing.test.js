import React from 'react';
import renderer from 'react-test-renderer';

import Landing from '../Landing';

describe('Landing page', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Landing />).toJSON();
    console.log(tree.children.length)
    expect(tree.children.length).toBe(3);
  });
});