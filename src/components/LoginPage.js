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
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expensify</h1>
                <p>It's time to get your expenses under control.</p>
                <button
                    className="button-layout"
                    onClick={this.onButtonClick}
                >Login with Google</button>
            </div>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
});

const mapDispatchToProps = (dispatch) => ({
    startLogin : () => dispatch(startLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
