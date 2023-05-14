import {createStore} from 'redux'

const initState = {
    counter:0
}

const rootReducer = (state = initState, action) => {
    return state
}

const store = createStore(rootReducer)
export default store;