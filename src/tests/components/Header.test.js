import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import toJSON from 'enzyme-to-json';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    // console.log(wrapper);
    expect(wrapper.find('h1').text()).toBe('Expensify');

    // expect(wrapper).toMatchSnopshot();
    // expect(wrapper.find('h1').text()).toBe('Expensify');

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    // console.log(renderer.getRenderOutput());
});