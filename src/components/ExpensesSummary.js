import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0.0.00');

    return (
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
        </div>
    );
};

// export const ExpensesSummary = ({expenses}) => (
//     <div>
//         <p>total amount : {numeral(selectExpensesTotal(expenses)).format('$0.0.00')}</p>
//         {/*{expensesTotal > 0 && <p>total amount : {numeral(expensesTotal).format('$0.0.00')}</p>}*/}
//     </div>
// );

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount : visibleExpenses.length,
        expensesTotal : selectExpensesTotal(visibleExpenses)
        // expensesTotal : selectExpensesTotal(selectExpenses(state.expenses, state.filters))
        // expenses : selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);