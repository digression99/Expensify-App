import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, {
        type : '@@INIT'
    });

    // default filter state.
    expect(state).toEqual({
        text : '',
        sortBy : 'date',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month'),
    });
});

test('should set sortby to amount', () => {
    const state = filtersReducer(undefined, {
        type : 'SORT_BY_AMOUNT'
    });
    expect(state.sortBy).toBe('amount');
});

test('should set sortby to date', () => {
    const currentState = {
        // text : '',
        // startDate : undefined,
        // endDate : undefined,
        sortBy : 'amount'
    };
    const action = {
        type : 'SORT_BY_DATE'
    };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

// should set text filter
test('should set text filter', () => {
    // const currentState = {
    //     text : '',
    //     startDate : undefined,
    //     endDate : undefined,
    //     sortBy : 'date'
    // };
    const text = 'blabla';
    const action = {
        type : 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});
// should set startDate filter
test('should set startDate filter', () => {
    // const currentState = {
    //     text : '',
    //     startDate : undefined,
    //     endDate : undefined,
    //     sortBy : 'date'
    // };
    const date = moment(0);
    const action = {
        type : 'SET_START_DATE',
        date
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toBe(date);
});
// should set endDate filter
test('should set endDate filter', () => {
    // const currentState = {
    //     text : '',
    //     startDate : undefined,
    //     endDate : undefined,
    //     sortBy : 'date'
    // };
    const date = moment(0);
    const action = {
        type : 'SET_END_DATE',
        date
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toBe(date);
});