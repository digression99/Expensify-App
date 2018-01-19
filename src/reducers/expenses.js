
// start by none of the expenses.
const expensesReducerDefaultState = [];

// reducer
export default (state = expensesReducerDefaultState, action) => {
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