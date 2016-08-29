var redux = require('redux');
var reducers = require('./reducers');

module.exports = redux.createStore(redux.combineReducers(reducers));
