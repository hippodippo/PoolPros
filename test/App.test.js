import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App.js';

describe('App', () => {
  test('Should match snapchat', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('h1').text()).toBe('Hello Kaycee!'); // Placeholder Test.
    expect(wrapper).toMatchSnapshot();
  });
});