
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import counterReducer from "./counter/counterReducer";
import { composeWithDevTools } from '@redux-devtools/extension';

const store =  createStore(counterReducer,composeWithDevTools(applyMiddleware(logger)));




export default store;