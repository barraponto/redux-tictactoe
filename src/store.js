var redux = require("redux");
var reducers = require("./reducers");

exports.create = (state) => redux.createStore(redux.combineReducers(reducers), state);
