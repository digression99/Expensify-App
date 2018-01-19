import React from 'react';
import { connect } from 'react-redux';
import {DateRangePicker} from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused : null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };
    onSortChange = (e) => {
        // console.log(e.target.value);
        const sortBy = e.target.value;
        switch (sortBy) {
            case 'date':
                this.props.sortByDate();
                break;
            case 'amount':
                this.props.sortByAmount();
                break;
            default:
                console.log("error!");
                break;
        }
    };

    render() {
        // console.log('my props!', this.props);
        return (
            <div>
                <input type="text"
                       defaultValue={this.props.text}
                       onChange={this.onTextChange}
                />
                <label htmlFor="sort">SORT :
                    <select name="sort" id=""
                            onChange={this.onSortChange}
                    >
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </label>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange} // function
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        );
    }
}


// setup value and opChange for select.

const mapStateToProps = (state) => ({
    filters : state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter : (text) => dispatch(setTextFilter(text)),
    sortByDate : () => dispatch(sortByDate()),
    sortByAmount : () => dispatch(sortByAmount()),
    setStartDate : (startDate) => dispatch(setStartDate(startDate)),
    setEndDate : (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

// export default ExpenseListFilters;