import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import AppRouter, {history} from './routers/AppRouter';
// import PortfolioAppRouter from './routers/PortfolioAppRouter';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { firebase } from './firebase/firebase';

import LoadingPage from './components/LoadingPage';

const store = configureStore();

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));

        console.log(user.uid);
        store.dispatch(startSetExpenses())
            .then(() => {
                renderApp();
                if (history.location.pathname === '/') {
                    history.push('/dashboard');
                }

            });
    } else {
store.dispatch(logout());

renderApp();
// ReactDOM.render(jsx, document.getElementById('app'));
history.push('/'); // to login page.
console.log('log out');
}
});

