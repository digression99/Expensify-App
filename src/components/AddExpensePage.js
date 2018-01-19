import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense));
        this.props.addExpense(expense);
        console.log('added!');
        // console.log(props.history);
        this.props.history.push('/'); // redirect.
    };
    render() {
        return (
            <div>
                <h1>Add expense</h1>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                />
            </div>

        );
    }
}

// const AddExpensePage = (props) => {
//     return (
//         <div>
//             <h1>Add expense</h1>
//             <ExpenseForm
//                 onSubmit={(expense) => {
//                     // // props.dispatch(addExpense(expense));
//                     // props.onSubmit(expense);
//                     // console.log('added!');
//                     // // console.log(props.history);
//                     // props.history.push('/'); // redirect.
//                 }}
//             />
//         </div>
//     );
// };

const mapDispatchToProps = (dispatch) => ({addExpense : (expense) => dispatch(addExpense(expense))});

export default connect(undefined ,mapDispatchToProps)(AddExpensePage);