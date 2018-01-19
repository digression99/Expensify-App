import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
// import PortfolioAppRouter from './routers/PortfolioAppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

//ReactDOM.render(<p>Hi!</p>, document.getElementById('app'));

const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
//     //console.log(store.getState());
// });

// add expense -> water bill
// add expense -> gas bill

//
// const expenseOne = store.dispatch(addExpense({
//     description : 'water bill',
//     amount : 4500,
//     createdAt : 2000
// }));
//
// const expenseTwo = store.dispatch(addExpense({
//     description : 'gas bill',
//     amount : 1000,
//     createdAt : -1000
// }));
//
// const expenseThree = store.dispatch(addExpense({
//     description : 'rent',
//     amount : 109500,
//     createdAt : -4000
// }));
//

// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('rent'));
// }, 3000);

// console.log(store.getState());

// set text filter -> bill ( 2 items should be in it. )
// store.getSat
// get visible expenses -> print visible ones to screen.

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
//ReactDOM.render(<PortfolioAppRouter />, document.getElementById('app'));

