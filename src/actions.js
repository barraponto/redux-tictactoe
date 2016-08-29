var PLAY = exports.PLAY = 'PLAY';
var JOIN = exports.JOIN = 'JOIN';
var LEAVE = exports.LEAVE = 'LEAVE';

exports.play = function(playerIndex, cellIndex){
  return {
    type: PLAY,
    player: playerIndex,
    cell: cellIndex
  };
};

exports.join = function(playerId) {
  return {
    type: JOIN,
    player: playerId
  };
};

exports.leave = function(playerId) {
  return {
    type: LEAVE,
    player: playerId
  };
};
