
// action generators for expenses
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';



// action generator.
// add expense
export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type : 'ADD_EXPENSE',
    expense : {
        id : uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

export const removeExpense = ({ id = undefined } = {}) => ({
    type : 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
});
