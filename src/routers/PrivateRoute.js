import React from 'react';
import {connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

import Header from '../components/Header';

export const PrivateRoute = ({
                                 isAuthenticated,
                                 component : Component,
                                 ...rest
}) => (
    <Route {...rest} component={(props) => (
        // meaningful work done here.
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to="/"/>
        )
    )}/>
);

const mapStateToProps = (state) => ({
    isAuthenticated : !!state.auth.uid // change to boolean value.
});

export default connect(mapStateToProps)(PrivateRoute);
