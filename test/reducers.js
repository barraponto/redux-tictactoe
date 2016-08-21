var should = require('chai').should();
var reducers = require('../src/reducers');
var actions = require('../src/actions');

/**
 * Tictactoe board state
 */

describe('Game Start', function(){

  it('should start at turn 0', function(){
    // var turn = 0;
    var turn = reducers.turn();
    turn.should.be.a('Number');
    turn.should.equal(0);
  });

  it('should start with a null board', function(){
    //var board = [null, null, null, null, null, null, null, null, null];
    var board = reducers.board();
    board.should.be.an('Array');
    board.should.have.length(9);
    board.forEach(function(cell){ should.equal(cell, null); });
  });

  it('should start with two undefined players', function(){
    // var players = [{id: null}, {id: null}]
    var players = reducers.players();
    players.should.be.an('Array');
    players.should.have.length(2);
    players.forEach(function(player){ should.equal(player.id, null); });
  });

  it('should start with no winner', function(){
    // var winner = null;
    var winner = reducers.winner();
    should.not.exist(winner);
  });

});

describe('User joins', function(){
  it('should allow a user to join the game', function(){
    var initial = reducers.players();
    var players = reducers.players(initial, actions.join('hackerman'));
    players.should.be.an('Array');
    players.should.have.length(2);
    players[0].should.deep.equal({id: 'hackerman'});
  });

  it('should not allow a user to join a full game', function(){
    var initial = reducers.players();
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
    var initial = reducers.players();
    var oneplayer = reducers.players(initial, actions.join('hackerman'));
    var twoplayers = reducers.players(oneplayer, actions.join('barbarianna'));
    var players = reducers.players(twoplayers, actions.leave('hackerman'));
    players.should.be.an('Array');
    players.should.have.length(2);
    players.filter(function(player){ return player.id === 'barbarianna'; }).length.should.equal(1);
    players.filter(function(player){ return player.id === null ; }).length.should.equal(1);
    should.not.exist(players.find(function(player){ return player.id == 'hackerman'; }));
  });
});
