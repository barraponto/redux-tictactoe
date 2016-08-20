var should = require('chai').should();
var actions = require('../src/actions');

/**
 * Tictactoe actions and action creators.
 */

describe('Actions', function(){
  it('should play on the first cell', function(){
    // var action = {type: actions.PLAY, player: 'hackerman', cell: 0};
    var action = actions.play('hackerman', 0);
    action.should.be.an('Object');
    action.type.should.be.a('String');
    action.type.should.equal(actions.PLAY);
    action.player.should.be.a('String');
    action.player.should.equal('hackerman');
    action.cell.should.be.a('Number');
    action.cell.should.equal(0);
  });

  it('should join hackerman user', function(){
    // var action = {type: actions.JOIN, player: 'hackerman'};
    var action = actions.join('hackerman');
    action.should.be.an('Object');
    action.type.should.be.a('String');
    action.type.should.equal(actions.JOIN);
    action.player.should.be.a('String');
    action.player.should.equal('hackerman');
  });

  it('should leave hackerman user', function(){
    // var action = {type: actions.LEAVE, player: 'hackerman'};
    var action = actions.leave('hackerman');
    action.should.be.an('Object');
    action.type.should.be.a('String');
    action.type.should.equal(actions.LEAVE);
    action.player.should.be.a('String');
    action.player.should.equal('hackerman');
  });
});
