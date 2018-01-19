import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
    return (
        <div>
            {/*404! - <a href="/">Go Home!</a>*/}
            404! - <Link to="/">Go Home</Link>
        </div>
    );
};

export default NotFoundPage;