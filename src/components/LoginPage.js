import React from 'react';
import {connect} from 'react-redux';
import { startLogin } from '../actions/auth';

export class LoginPage extends React.Component {

    onButtonClick = (e) => {
        console.log('button clicked!');
        console.log('event : ', e);
        this.props.startLogin();
    };

    render = () => (
        <div>
            <button
                onClick={this.onButtonClick}
            >Login</button>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
});

const mapDispatchToProps = (dispatch) => ({
    startLogin : () => dispatch(startLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
