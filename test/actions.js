var should = require('chai').should();
var actions = require('../src/actions');

/**
 * Tictactoe actions and action creators.
 */

describe('Actions', function(){
  it('should play on the first cell', function(){
    // var action = {type: actions.PLAY, cell: 0};
    var action = actions.play(0);
    action.should.be.an('Object');
    action.type.should.be.a('String');
    action.type.should.equal(actions.PLAY);
    action.cell.should.be.a('Number');
    action.cell.should.equal(0);
  });
});
