import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import {Header} from '../../components/Header';
// import toJSON from 'enzyme-to-json';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {} }/>);
    // expect(wrapper.find('h1').text()).toBe('Expensify');

    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const onClickSpy = jest.fn();

    const wrapper = shallow(<Header startLogout={onClickSpy}/>);

    wrapper.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
});

// should call startLogout on button click
// LoginPage test file -> should call startLogin on button click