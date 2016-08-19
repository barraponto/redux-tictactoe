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
    players.forEach(function(player){ should.equal(player.id, null); })
  });

});

describe('User joins', function(){
  it('should allow a user to join the game', function(){
    var initial = reducers.players();
    var players = reducers.players(initial, actions.join('hackerman'));
    players.should.be.an('Array');
    players.should.have.length(2);
    players[0].should.deep.equal({id: 'hackerman'});
  })
});
