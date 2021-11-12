import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';


const incrementAction = () => {
    return {
        type: INCREMENT,
    };
};

const decrementAction = () => {
    return {
        type: DECREMENT,
    };
};

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(counterReducer);

store.dispach(incrementAction);
store.dispach(incrementAction);
store.dispach(decrementAction);

console.log(store.getState());