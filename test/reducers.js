var should = require('chai').should();
var reducers = require('../src/reducers');

/**
 * Tictactoe board state
 */

describe('Game Start', function(){

  it('should start at turn 0', function(){
    // var turn = 0;
    var turn = reducers.turn();
    turn.should.be.a('Number');
    turn.should.equal(0);
  })

  it('should start with a null board', function(){
    //var board = [null, null, null, null, null, null, null, null, null];
    var board = reducers.board();
    board.should.be.an('Array');
    board.should.have.length(9);
    board.forEach(function(cell){ should.not.exist(cell); should.equal(cell, null); });
  });

});
