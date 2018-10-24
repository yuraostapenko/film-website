import { createStore, applyMiddleware, compose } from 'redux';
import  rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router'

export const history = createBrowserHistory()

const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const  store = createStore(connectRouter(history)(rootReducer), compose(applyMiddleware(thunk), DevTools));

export default store;