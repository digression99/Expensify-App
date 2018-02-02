import React from 'react';
import { shallow } from 'enzyme';
import { LoadingPage } from '../../components/LoadingPage';

test('should render LoadingPage correctly', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('div').find('p').text()).toBe(`amount : ${numeral(expenses[0].amount / 100).format('$0.0.00')}, createdAt : ${moment(expenses[0].createdAt).format('MMMM Do, YYYY')}`);
});