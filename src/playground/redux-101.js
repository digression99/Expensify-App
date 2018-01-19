import { createStore } from 'redux';

// const incrementCount = (payload = {}) => ({
//     type : 'INCREMENT',
//     incrementBy : payload.incrementBy || 1
//     // incrementBy : typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type : 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type : 'DECREMENT',
    decrementBy
});

const setCount = ({ count = 0 } = {}) => ({
    type : 'SET',
    count
});

const resetCount = () => ({
    type : 'RESET'
});

const countReducer = (state = { count : 0 }, action) => {
    console.log("running");

    switch (action.type) {
        case 'INCREMENT' :
            const incrementBy = action.incrementBy || 1;
            return {
                count : state.count + incrementBy
            };
        case 'DECREMENT' :
            const decrementBy = action.decrementBy || 1;
            return {
                count : state.count - decrementBy
            };
        case 'SET' :
            return {
                count : action.count
            };
        case 'RESET' :
            return {
                count : 0
            };
        default :
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type : 'INCREMENT', // convention. INCREMENT_OTHER
    incrementBy : 5
}); // send off an action object.

//unsubscribe();

store.dispatch(incrementCount({
    incrementBy : 5
}));

store.dispatch(incrementCount());
// store.dispatch({
//     type : 'INCREMENT' // convention. INCREMENT_OTHER
// }); // send off an action object.

// store.dispatch({
//     type : 'RESET'
// });

store.dispatch(resetCount());

store.dispatch({
    type : 'DECREMENT',
    decrementBy : 10
});

store.dispatch(decrementCount({
    decrementBy : 10
}));

// store.dispatch({
//     type : 'DECREMENT'
// });

// store.dispatch({
//     type : 'SET',
//     count : 101
// });

store.dispatch(setCount({count : 101}));