// export a stateless functional component
// render description, amount, createdAt.
// expenselist 에서 이걸 이용해 expenses.map.

import React from 'react';
import {Link} from 'react-router-dom';

export const ExpenseListItem = //(props) => (
    ({id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>amount : {amount}, createdAt : {createdAt}</p>
        {/*actually remove it.*/}
    </div>
);

export default ExpenseListItem;