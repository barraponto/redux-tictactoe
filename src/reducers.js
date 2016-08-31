var actions = require('./actions');

exports.turn = function(state, action) {
  if (state === undefined) { return 0; }

  switch (action.type) {
    case actions.PLAY:
      return state + 1;
    default:
      return state;
  }
};

exports.board = function(state, action) {
  if (state === undefined) { return [null, null, null, null, null, null, null, null, null]; }

  switch (action.type) {
    case actions.PLAY:
      return state.map(function(cell, index){ return index === action.payload.cell ? action.payload.player : cell; });

    default:
      return state;
  }
};

exports.players = function(state, action) {
  if (state === undefined) { return [{id: null}, {id: null}]; }

  switch (action.type) {
    case actions.JOIN:
      // get first openslot index.
      var openslot = state.findIndex(function(slot){ return slot.id === null; });
      if (openslot === -1) { return state; }

      return state.map(function(slot, index){
        return index === openslot ? {id: action.payload.player} : slot;
      });

    case actions.LEAVE:
      return state.map(function(slot){
        return slot.id === action.payload.player ? {id: null} : slot;
      });

    default:
      return state;
  }
};

exports.winner = function(state, action){
  if (state === undefined) { return null; }
  switch (action.type) {
    default:
      return state;
  }
};
