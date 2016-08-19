function player(state) {
  return state.players[state.turn % state.players.length];
}
