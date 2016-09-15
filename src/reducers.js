var handleAction = require('redux-actions').handleAction;
var handleActions = require('redux-actions').handleActions;
var actions = require('./actions');

exports.turn = handleAction(
  actions.play,
  function(state, action){ return state + 1; },
  0
);

exports.board = handleAction(
  actions.play,
  function(state, action){
    return state.map(function(cell, index){
      return index === action.payload.cell ? action.payload.player : cell;
    });
  },
  Array(9).fill(null)
);

var playerReducers = {};
playerReducers[actions.join] = function(state, action){
  var openslot = state.findIndex(function(slot){
    return slot.id === null;
  });
  if (openslot === -1) { return state; }
  return state.map(function(slot, index){
    return index === openslot ? {id: action.payload.player} : slot;
  });
};
playerReducers[actions.leave] = function(state, action) {
  var playerslot = state.findIndex(function(slot){
    return slot.id === action.payload.player;
  });

  return state.map(function(slot, index){
    return index === playerslot ? {id: null} : slot;
  });
};

exports.players = handleActions(
  playerReducers,
  [{id: null}, {id: null}]
);
