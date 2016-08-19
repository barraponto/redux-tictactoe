var actions = require('./actions');

exports.turn = function(state, action) {
  if (!state) { return 0; }
};

exports.board = function(state, action) {
  if (!state) { return [null, null, null, null, null, null, null, null, null]; }
};

exports.players = function(state, action) {
  if (!state) { return [{id: null}, {id: null}]; }
  if (action.type === actions.JOIN) {
    // get first openslot index.
    var openslot = state.findIndex(function(slot){ return slot.id === null; });
    return state.map(function(slot, index){
      // if there is no open slot, openslot==-1 and index is guaranteed to start at 0...
      return index === openslot ? {id: action.player} : slot;
    });
  }
};
