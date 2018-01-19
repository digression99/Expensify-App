import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type : '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id : expenses[1].id
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id : '-1'
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

// should add an expense
test('should add an expense', () => {
    const action = {
        type : 'ADD_EXPENSE',
        expense : {
            id : '4',
            description : 'test 5',
            note : '',
            amount : 4500,
            createdAt : moment(0).add(8, 'days').valueOf()
        }
    };

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});
// should edit an expense
test('should edit an expense', () => {
    const action = {
        type : 'EDIT_EXPENSE',
        id : '3',
        updates : {
            description : 'no credit card !'
        }
    };
    const state = expensesReducer(expenses, action);

    expect(state[2].description).toBe(action.updates.description);
});

// should not edit expense if expense not found
test('should not edit an expense', () => {
    const action = {
        type : 'EDIT_EXPENSE',
        id : '-1',
        updates : {
            description : 'no credit card !'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses); // don't use toBe here.
    // expect(state[2].description).toBe(action.updates.description);
});