var createAction = require('redux-actions').createAction;

var PLAY = exports.PLAY = 'PLAY';
var JOIN = exports.JOIN = 'JOIN';
var LEAVE = exports.LEAVE = 'LEAVE';

exports.play = createAction(PLAY, (playerIndex, cellIndex) => {
  return {player: playerIndex, cell: cellIndex};
});

exports.join = createAction(JOIN, (playerId) => {
  return {player: playerId};
});

exports.leave = createAction(LEAVE, (playerId) => {
  return {player: playerId};
});
