const redux = require('redux');

const createStore = redux.createStore;

const initState = {
    data: 0
}

const rootReducer = (state = initState, action) => {
    if (action.type === "INC_COUNTER") {
        return {
            ...state,
            data: state.data + action.value
        }
    } else if (action.type === "DEC_COUNTER") {
        return {
            ...state,
            data: state.data - action.value
        }
    } else {
        return state;
    }
}
const store = createStore(rootReducer);
store.dispatch({
    type: "INC_COUNTER",
    value:5,
})
store.dispatch({ type: "DEC_COUNTER", value:1 });
console.log(store.getState());