var should = require('chai').should();
var testAction = require('./utils').testAction;
var reducers = require('../src/reducers');
var actions = require('../src/actions');


/**
 * Tictactoe board state
 */

describe('Game Start', function(){

  it('should start at turn 0', function(){
    // var turn = 0;
    var turn = reducers.turn(undefined, testAction());
    turn.should.be.a('Number');
    turn.should.equal(0);
  });

  it('should start with a null board', function(){
    //var board = [null, null, null, null, null, null, null, null, null];
    var board = reducers.board(undefined, testAction());
    board.should.be.an('Array');
    board.should.have.length(9);
    board.forEach(function(cell){ should.equal(cell, null); });
  });

  it('should start with two undefined players', function(){
    // var players = [{id: null}, {id: null}]
    var players = reducers.players(undefined, testAction());
    players.should.be.an('Array');
    players.should.have.length(2);
    players.forEach(function(player){ should.equal(player.id, null); });
  });
});

describe('User joins', function(){
  it('should allow a user to join the game', function(){
    var initial = reducers.players(undefined, testAction());
    var players = reducers.players(initial, actions.join('hackerman'));
    players.should.be.an('Array');
    players.should.have.length(2);
    players[0].should.deep.equal({id: 'hackerman'});
  });

  it('should not allow a user to join a full game', function(){
    var initial = reducers.players(undefined, testAction());
    var oneplayer = reducers.players(initial, actions.join('hackerman'));
    var twoplayers = reducers.players(oneplayer, actions.join('barbarianna'));
    var players = reducers.players(twoplayers, actions.join('triceracops'));
    players.should.be.an('Array');
    players.should.have.length(2);
    should.not.exist(players.find(function(player){ return player.id === 'triceracops'; }));
  });
});

describe('User leaves', function(){
  it('should allow a user to leave the game', function(){
    var initial = reducers.players(undefined, testAction());
    var onePlayer = reducers.players(initial, actions.join('hackerman'));
    var twoPlayers = reducers.players(onePlayer, actions.join('barbarianna'));
    var players = reducers.players(twoPlayers, actions.leave('hackerman'));
    players.should.be.an('Array');
    players.should.have.length(2);
    players.filter(function(player){ return player.id === 'barbarianna'; }).length.should.equal(1);
    players.filter(function(player){ return player.id === null ; }).length.should.equal(1);
    should.not.exist(players.find(function(player){ return player.id == 'hackerman'; }));
  });
});

describe('User plays', function(){
  it('should update turn counter on every play', function(){
    var initial = reducers.turn(undefined, testAction());
    var firstTurn = reducers.turn(initial, actions.play(0, 0));
    firstTurn.should.be.a('Number');
    firstTurn.should.equal(1);
  });

  it('should update the board on every play', function(){
    var initial = reducers.board(undefined, testAction());
    var firstMove = reducers.board(initial, actions.play(0, 0));
    firstMove.should.be.an('Array');
    firstMove.should.have.length(9);
    firstMove[0].should.be.a('Number');
    firstMove[0].should.equal(0)
  });
});
