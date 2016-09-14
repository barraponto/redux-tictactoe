var createAction = require('redux-actions').createAction;

var PLAY = exports.PLAY = 'PLAY';
var JOIN = exports.JOIN = 'JOIN';
var LEAVE = exports.LEAVE = 'LEAVE';

exports.play = createAction(PLAY, function(playerIndex, cellIndex){
  return {player: playerIndex, cell: cellIndex};
});

exports.join = createAction(JOIN, function(playerId){
  return {player: playerId};
});

exports.leave = createAction(LEAVE, function(playerId){
  return {player: playerId};
});
