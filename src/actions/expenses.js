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

// export const startAddExpense = (expenseData = {}) => {
//     return (dispatch) => {
//         const {
//             description = '', note = '', amount = 0, createdAt = 0 // default data
//         } = expenseData; // destructure.
//         const expense = {
//             description, note, amount, createdAt
//         };
//         database.ref('expenses').push(expense)
//             .then((ref) => {
//                 dispatch(addExpense({
//                     id : ref.key,
//                     ...expense
//                 }));
//             });
//     }
// };

export const removeExpense = ({ id = undefined } = {}) => ({
    type : 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
});

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