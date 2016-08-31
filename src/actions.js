var PLAY = exports.PLAY = 'PLAY';
var JOIN = exports.JOIN = 'JOIN';
var LEAVE = exports.LEAVE = 'LEAVE';

exports.play = function(playerIndex, cellIndex){
  return {
    type: PLAY,
    payload: {
      player: playerIndex,
      cell: cellIndex
    }
  };
};

exports.join = function(playerId) {
  return {
    type: JOIN,
    payload: {
      player: playerId
    }
  };
};

exports.leave = function(playerId) {
  return {
    type: LEAVE,
    payload: {
      player: playerId
    }
  };
};
