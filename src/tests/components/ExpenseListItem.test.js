import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import numeral from 'numeral';

// create test file
// grap imports
// render expensellistitem with one of the fixture items.
// create snapshot.

test('should render ExpenseListItem correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find('div').find('p').text()).toBe(`amount : ${numeral(expenses[0].amount / 100).format('$0.0.00')}, createdAt : ${moment(expenses[0].createdAt).format('MMMM Do, YYYY')}`);
});