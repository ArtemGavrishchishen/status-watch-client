import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { watchesReducer } from './watches';
import { sharesReducer } from './shares';
import { modalReducer } from './modal';

const rootReducer = combineReducers({
  data: watchesReducer,
  shares: sharesReducer,
  modalIsOpen: modalReducer,
});

const logger = createLogger();
const middlewares = applyMiddleware(logger, thunk);
const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
