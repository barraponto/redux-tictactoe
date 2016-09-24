exports.player = (state) => state.turn % state.players.length;

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
    // @TODO: early exit if we find a winner
    lines.forEach((indexes) => {
        var cells = indexes.map((index) => board[index]);
        if (cells.every((cell) => cell === cells[0])) {
            winner = board[indexes[0]];
        }
    });
    return winner;
};
