import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    }); // click, submit, ...
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = 'new description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', { // 'at' is if you match several items, you get the item in the index.
       target : { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
    const value = 'new note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target : {value}
    });
    expect(wrapper.state('note')).toBe(value);
});

// should set amount if valid input
// 23.50
// should not set amount if invalid input
// 12.122

test('should set amount if valid input', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target : {value},
        //match : (exp) => new RegExp(value).match(exp)
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount if invalid input', () => {
    const value = '12.122';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target : {value}
    });
    expect(wrapper.state('amount')).not.toBe(value);
    // expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    // onSubmitSpy('Kim', 'Philie');
    // expect(onSubmitSpy).toHaveBeenCalledWith('Kim', 'Philie');
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    }); // click, submit, ...
    expect(wrapper.state('error')).toBe(''); // check if error is not occured.
    // expect(onSubmitSpy).toHaveBeenLastCalledWith(({amount, description, note, createdAt} = expenses[0]));
    const {description, amount, note, createdAt} = expenses[0];

    expect(onSubmitSpy).toHaveBeenLastCalledWith({description, amount, note, createdAt});
});

test('should set new date on date change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const now = moment();
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now); // component changed.
});

// should set calendar focus on change

test('should set calendar focus on change', () => {
    const wrapper = shallow(<ExpenseForm />);
    const focused = true;
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toEqual(focused);
});










