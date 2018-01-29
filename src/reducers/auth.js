export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid : action.uid
            };
        case 'LOGOUT':
            return {};
        default: // for combine reducer
            return state;
    }
};