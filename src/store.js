import {combineReducers, createStore} from "redux";
import * as reducers from "./reducers";

exports.create = (state) =>
    createStore(combineReducers(reducers), state);
