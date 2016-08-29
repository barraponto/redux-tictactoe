var redux = require('redux');
var reducers = require('./reducers');


exports.create = function(){
  return redux.createStore(redux.combineReducers(reducers));
};
