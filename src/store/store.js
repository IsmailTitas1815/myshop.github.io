import { createStore, combineReducers, applyMiddleware } from 'redux';
import ProductsReducer from './reducers/ProductsReducer';
import CartReducer from './reducers/CartReducer';
import AuthReducer from './reducers/AuthReducer';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || devToolsEnhancer;

const root = combineReducers({
    ProductsReducer,
    CartReducer,
    AuthReducer,
})
const store = createStore(root, applyMiddleware(thunk));
// const store = createStore(root, composeEnhancer(applyMiddleware(thunk)))

export default store;