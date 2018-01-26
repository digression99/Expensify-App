import uuid from 'uuid';
import database from '../firebase/firebase';

// export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
//     type : 'ADD_EXPENSE',
//     expense : {
//         id : uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// });

export const addExpense = expense => ({
    type : 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => dispatch => {
    const {
        description = '', note = '', amount = 0, createdAt = 0 // default data
    } = expenseData; // destructure.
    const expense = {
        description, note, amount, createdAt
    };
    return database.ref('expenses').push(expense)
        .then((ref) => {
            dispatch(addExpense({
                id : ref.key,
                ...expense
            }));
        });
};

export const removeExpense = ({ id } = {}) => ({
    type : 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({id} = {}) => dispatch => {
    // console.log('in start remove expense, id : ', id);
    return database.ref(`expenses/${id}`).remove()
        .then(() => {
            // console.log('in start remove expense, before dispatch, id : ', id);
            dispatch(removeExpense({id}));
        });
};

export const editExpense = (id, updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => dispatch =>
    database.ref(`expenses/${id}`)
        .update({
            ...updates
        })
        .then(() => {
            dispatch(editExpense(id, updates));
        });

// create startEditExpense (same call signature as editExpense)
// test startEditExpense with 'should edit expenses from firebase'
// use startEditExpense in EditExpensePage instead of editExpense
// adjust EditExpensePage tests

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type : 'SET_EXPENSES',
    expenses
});

// export const startSetExpenses;
// fetch all expenses from database once.
// parse that data into an array.
// dispatch SET_EXPENSES

export const startSetExpenses = (expenses = []) => dispatch => {
    return database.ref('expenses').once('value')
        .then(snapshot => {
            snapshot.forEach(childSnapshot => {
                expenses.push({
                    ...childSnapshot.val(),
                    id : childSnapshot.key
                });
            });
            dispatch(setExpenses(expenses));
        })
};

// create startRemoveExpense (same call signature as removeExpense)
// test startRemoveExpense with 'should remove expenses from firebase' // test if it's null.
// use startremoveExpense in EditExpensePage instread of removeExpense
// adjust EditExpensePage tests


// const printExpenses = snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             ...childSnapshot.val(),
//             id : childSnapshot.key
//         })
//     });
//     console.log(expenses);
// };
//
// database.ref('expenses')
//     .once('value')
//     .then(printExpenses);