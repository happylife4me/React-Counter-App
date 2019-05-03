import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

describe('components testing', function() {
  describe('App testing ', function() {

    it('renders correctly', function() {
      var domtree = renderer.create(<App />).toJSON();
      expect(domtree).toMatchSnapshot();
    });
  });
});
// npm run test --  --verbose
// npm install react-test-renderer --save-dev


// npm  test --  --coverage
