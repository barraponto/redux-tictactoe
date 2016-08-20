var PLAY = exports.PLAY = 'PLAY';
var JOIN = exports.JOIN = 'JOIN';
var LEAVE = exports.LEAVE = 'LEAVE';

exports.play = function(playerId, index){
  return {
    type: PLAY,
    player: playerId,
    cell: index
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
