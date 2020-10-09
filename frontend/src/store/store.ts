import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { UsersReducer } from './Users/reducers';

const reducers = combineReducers({
    users: UsersReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
