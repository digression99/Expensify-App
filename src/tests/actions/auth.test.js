import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { login, startLogin, logout, startLogout } from '../../actions/auth';

const createMockStore = configureMockStore([thunk]);

test('should generate login action object', () => {
    const uid = '123abcd';
    const action = login(uid);
    expect(action).toEqual({
        type : 'LOGIN',
        uid
    });
});

test('should generate logout action object', () => {
    const action = logout();

    expect(action).toEqual({
        type : 'LOGOUT',
    });
});

// test('should add uid to the redux store', () => {
//     const action = logout();
//     const store = createMockStore();
//     //
//     // store.dispatch(startLogin())
//     //     .then()
//
//
// });

// how can I setup uid into the redux store and after startLogout, remove it?