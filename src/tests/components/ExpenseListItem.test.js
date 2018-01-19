import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

// create test file
// grap imports
// render expensellistitem with one of the fixture items.
// create snapshot.

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').find('p').text()).toBe(`amount : ${expenses[0].amount}, createdAt : ${expenses[0].createdAt}`);
});