import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
    const expenseData = {
        description : 'rent',
        amount : 1029384,
        createdAt : 12341231,
        note : 'this was last months rent'
    };
    const action = addExpense(expenseData);

    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id : expect.any(String)
        }
    });
});

test('should setup add expense action object with default values', () => {
    // call add expense with no  data
    // assert the value of the return object.
    const defaultObject = { description : '', note : '', amount : 0, createdAt : 0 };
    const action = addExpense();
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            ...defaultObject,
            id : expect.any(String)
        }
    });
});