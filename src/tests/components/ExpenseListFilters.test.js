import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters : altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

// wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
// expect(history.push).toHaveBeenLastCalledWith('/');
// expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);

// should handle text change
test('should handle text change', () => {
    // const event = {
    //     target : {
    //         value : 'blabla'
    //     }
    // };
    // wrapper.find('input').prop('onChange')(event);

    const value = 'rentt';
    wrapper.find('input').simulate('change', {
        target : {value}
    });

    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

// should sort by date
test('should sort by date', () => {
    // const event = {
    //     target : {
    //         value : 'date'
    //     }
    // };
    // wrapper.find('select').prop('onChange')(event);

    wrapper.setProps({
        filters : altFilters
    });
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target : {value}
    });
    expect(sortByDate).toHaveBeenCalled();
});

// should sort by amount
test('should sort by amount', () => {
    // const event = {
    //     target : {
    //         value : 'amount'
    //     }
    // };
    // wrapper.find('select').prop('onChange')(event);
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target : {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

// should handle date changes
test('should handle date changes', () => {
    // wrapper.find('DateRangePicker').prop('onDatesChange')({
    //     startDate : altFilters.startDate,
    //     endDate : altFilters.endDate
    // });
    // expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
    // expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);

    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');

    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

// should handle date focus changes
test('should handle date focus changes', () => {
    // const focused = true;
    // wrapper.find('DateRangePicker').prop('onFocusChange')({focused});
    // expect(wrapper.state('calendarFocused')).toBe(focused);

    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});