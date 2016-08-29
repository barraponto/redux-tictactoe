var redux = require('redux');
var reducers = require('./reducers');


exports.create = function(state){
  return redux.createStore(redux.combineReducers(reducers), state);
};
