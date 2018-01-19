import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// action generator.
// add expense
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type : 'ADD_EXPENSE',
    expense : {
        id : uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id = undefined } = {}) => ({
    type : 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type : 'EDIT_EXPENSE',
        id,
        updates
});


// edit expense
// set text filter
// sort by value
// sory by amount
// set start date
// set end date

// start by none of the expenses.
const expensesReducerDefaultState = [];

// reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE' :
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            //return state.filter(expense => action.id !== expense.id);
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map(expense => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates // override the properties.
                    };
                } else {
                    return expense;
                }
            });
        default :
            return state;
    }
};

const setTextFilter = (text = '') => ({
    type : 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({type : 'SORT_BY_AMOUNT'});

const sortByDate = () => ({type : 'SORT_BY_DATE'});

const setStartDate = (date = undefined) => ({
    type : 'SET_START_DATE',
    date});
const setEndDate = (date = undefined) => ({
    type : 'SET_END_DATE',
    date});

const filtersReducerDefaultValue = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
};

const filtersReducer = (state = filtersReducerDefaultValue, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text : action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy : 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy : 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate : action.date
            };
            break;
        case 'SET_END_DATE':
            return {
                ...state,
                endDate : action.date
            };
            break;
        default :
            return state;
    }
};

// get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        // figure out if expenses.description as the text variable string inside of it.
        // includes.
        // convert both strings to lower case.

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date' ) {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// store creation.
const store = createStore(combineReducers({
    expenses : expensesReducer,
    filters : filtersReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
    //console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({
    description : 'rent',
    amount : 100,
    createdAt : 2000
}));

const expenseTwo = store.dispatch(addExpense({
    description : 'coffee',
    amount : 300,
    createdAt : -1000
}));
//
// // console.log(expenseOne.expense.id);
//
// const removed = store.dispatch(removeExpense({
//     id : expenseOne.expense.id
// }));
//
// store.dispatch(editExpense(expenseTwo.expense.id,
//     {
//         amount : 500
//     }
// ));
//
// store.dispatch(setTextFilter('re'));
// store.dispatch(setTextFilter());
//
store.dispatch(sortByAmount()); // change sortBy to amount.
// store.dispatch(sortByDate());


// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate()); // undefined.
// store.dispatch(setEndDate(999));


const demoState = {
    expenses : [{
        id : 'random_string',
        description : 'january rent',
        note : 'this was the final payment for that address',
        amount : 54500, // penny.
        createdAt : 0
    }],
    filters : {
        text : 'rent',
        sortBy : 'amount', // date or amount.
        startDate : undefined,
        endDate : undefined
    }
};