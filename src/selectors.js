exports.player = function player(state) {
  return state.turn % state.players.length;
};

var lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

exports.winner = function player(board) {
  var winner = null;
  lines.forEach(function(indexes) {
    if (indexes.map(function(index){ return board[index]; })
               .every(function(cell, _, cells){ return cell === cells[0]; })) {
      winner = board[indexes[0]];
    }
  });
  return winner;
};
