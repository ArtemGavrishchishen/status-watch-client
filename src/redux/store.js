import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { watchesReducer } from './watches';
import { sharesReducer } from './shares';
import { modalReducer } from './modal';
import { cartReducer } from './cart';

const rootReducer = combineReducers({
  watches: watchesReducer,
  shares: sharesReducer,
  modalIsOpen: modalReducer,
  cart: cartReducer,
});

const logger = createLogger();
const middlewares = applyMiddleware(logger, thunk);
const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
