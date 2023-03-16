import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { restReducer } from './reducer'

const reducers = combineReducers({
    reducer:restReducer 
})

const middleware = [thunk]

//store creation
const store = createStore(reducers , applyMiddleware(...middleware));

export default store;