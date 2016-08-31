var should = require('chai').should();
var actions = require('../src/actions');

/**
 * Tictactoe actions and action creators.
 */

describe('Actions', function(){
  it('should play on the first cell', function(){
    // var action = {type: actions.PLAY, player: 'hackerman', cell: 0};
    var action = actions.play(0, 0);
    action.should.be.an('Object');
    action.type.should.be.a('String');
    action.type.should.equal(actions.PLAY);
    action.payload.should.be.an('Object');
    action.payload.player.should.be.a('Number');
    action.payload.player.should.equal(0);
    action.payload.cell.should.be.a('Number');
    action.payload.cell.should.equal(0);
  });

  it('should join hackerman user', function(){
    // var action = {type: actions.JOIN, player: 'hackerman'};
    var action = actions.join('hackerman');
    action.should.be.an('Object');
    action.type.should.be.a('String');
    action.type.should.equal(actions.JOIN);
    action.payload.should.be.an('Object');
    action.payload.player.should.be.a('String');
    action.payload.player.should.equal('hackerman');
  });

  it('should leave hackerman user', function(){
    // var action = {type: actions.LEAVE, player: 'hackerman'};
    var action = actions.leave('hackerman');
    action.should.be.an('Object');
    action.type.should.be.a('String');
    action.type.should.equal(actions.LEAVE);
    action.payload.should.be.an('Object');
    action.payload.player.should.be.a('String');
    action.payload.player.should.equal('hackerman');
  });
});
