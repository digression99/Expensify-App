import React from 'react';
import { shallow } from 'enzyme';
import {NotFoundPage} from '../../components/NotFoundPage';

test('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('div').find('p').text()).toBe(`amount : ${expenses[0].amount}, createdAt : ${expenses[0].createdAt}`);
});

