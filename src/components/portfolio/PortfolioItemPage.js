import React from 'react';

const PortfolioItemPage = (props) => {
    return (
        <div>
            <h1>A Thing I've Done</h1>
            This is portfolio item page. id is {props.match.params.id}
        </div>
    );
};

export default PortfolioItemPage;