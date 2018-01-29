import {
    startAddExpense,
    addExpense,
    editExpense,
    startEditExpense,
    removeExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const uid = '123123123123';
const defaultAuthState = {auth : {uid}};
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};

    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = {description, note, amount, createdAt };
    });

    database.ref(`users/${uid}/expenses`).set(expensesData)
        .then(() => done());
});

test('should setup remove expense action object', () => {
    const action = removeExpense({ id : "123abc" });
    expect(action).toEqual({
        type : 'REMOVE_EXPENSE',
        id : '123abc'
    });
});

// setup test case
// call editExpense
// make an assertion.

test('should setup edit expense action object', () => {
    const id = "123abc";
    const updates = {
        node : 'new note value',
        amount : 300,
        createdAt : 1000
    };
    const action = editExpense(id, updates);
    expect(action).toEqual({
        type : 'EDIT_EXPENSE',
        id,
        updates
    });
});

test('should setup add expense action object with provided values', () => {
    // const expenseData = {
    //     description : 'rent',
    //     amount : 1029384,
    //     createdAt : 12341231,
    //     note : 'this was last months rent'
    // };
    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense: expenses[2]
            // {
            // ...expenseData,
            // id : expect.any(String)
        // }
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description : 'mouse',
        amount : 3000,
        note : 'this one is better',
        createdAt : 1000
    };

    store.dispatch(startAddExpense(expenseData))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type : 'ADD_EXPENSE',
                expense : {
                    id : expect.any(String),
                    ...expenseData
                }
            });

            return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseDefault = {
        description : '',
        note : '',
        amount : 0,
        createdAt : 0 // default data
    };

    store.dispatch(startAddExpense(expenseDefault))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type : 'ADD_EXPENSE',
                expense : {
                    id : expect.any(String),
                    ...expenseDefault
                }
            });

            return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
        })
        .then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefault);
            done();
        });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type : 'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses())
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type : 'SET_EXPENSES',
                expenses
            });
            done();
        });
});

test('should remove expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const removeId = expenses[1].id;

    store.dispatch(startRemoveExpense({id : removeId}))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type : 'REMOVE_EXPENSE',
                id : removeId
            });
            return database.ref(`users/${uid}/expenses/${removeId}`).once('value');
        })
        .then(snapshot => {
            expect(snapshot.val()).toBeFalsy();
            done();
        });
});

test('should edit expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[0].id;
    const updates = {
        note : 'update note to this',
        amount : 99999,
        createdAt : 1234568,
        description : "update description to this"
    };

    store.dispatch(startEditExpense(id, updates))
        .then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type : 'EDIT_EXPENSE',
                id,
                updates
            });
            return database.ref(`users/${uid}/expenses/${id}`).once('value');
        })
        .then(snapshot => {
            expect(snapshot.key).toBe(id);
            expect(snapshot.val().amount).toEqual(updates.amount);
            done();
        });
});