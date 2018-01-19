import React from 'react';
import { NavLink } from 'react-router-dom';

const PortfolioPage = () => {
    return (
        <div>
            This is portfolio page.
            <p>
                <NavLink to="/portfolio/1">Item One</NavLink>
                <NavLink to="/portfolio/2">Item Two</NavLink>
            </p>
        </div>
    );
};

export default PortfolioPage;