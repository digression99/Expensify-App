import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

// const now = moment().format('MMM, Do, YYYY');
// console.log('now : ', now);

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description : props.expense ? props.expense.description : '',
            note : props.expense ? props.expense.note : '',
            amount : props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt : props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused : false,
            error : ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description
        }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({
            note
        }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) { // prevent clearning the date.
            this.setState(() => ({ createdAt }))
        }
    };

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused : focused}));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({error : 'PLEASE, provide description and amount.'}))
        } else {
            this.setState(() => ({error : ''}));
            const {description, amount, note, createdAt} = this.state;

            this.props.onSubmit({
                description,
                amount : parseFloat(amount, 10) * 100,
                createdAt : createdAt.valueOf(),
                note
            });
            // console.log('submitted!');
        }
    };

    render() {
        return (
            <div>
                <form action="" onSubmit={this.onSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input type="text"
                           placeholder="Description"
                           autoFocus
                           value={this.state.description}
                           onChange={this.onDescriptionChange}
                    />
                    <input type="number"
                           placeholder="Amount"
                           value={this.state.amount}
                           onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.onDateChange} // PropTypes.func.isRequired
                        focused={this.state.calendarFocused} // PropTypes.bool
                        onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    />
                    <button>Add Expense</button>
                </form>
                Expense Form
            </div>
        );
    }
}