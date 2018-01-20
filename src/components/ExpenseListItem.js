// export a stateless functional component
// render description, amount, createdAt.
// expenselist 에서 이걸 이용해 expenses.map.

import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = //(props) => (
    ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            amount : {numeral(amount / 100).format('$0.0.00')},
            createdAt : {moment(createdAt).format('MMMM Do, YYYY')}
            </p>
        {/*actually remove it.*/}
    </div>
);

export default ExpenseListItem;