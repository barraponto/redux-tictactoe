exports.turn = function(state, action) {
  if (!state) { return 0; }
};

exports.board = function(state, action) {
  if (!state) { return [null, null, null, null, null, null, null, null, null]; }
};

exports.players = function(state, action) {
  if (!state) { return [{id: null}, {id: null}]; }
};
