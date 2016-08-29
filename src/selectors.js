exports.player = function player(state) {
  return state.turn % state.players.length;
};
