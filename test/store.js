var should = require('chai').should();
var Store = require('../src/store');

describe('Store', function(){
  it('should initialize store with default state', function(){
    var expected = {
      turn: 0,
      board: [ null, null, null, null, null, null, null, null, null ],
      players: [ { id: null }, { id: null } ],
      winner: null
    };
    var store = Store.create();
    var state = store.getState();
    state.should.deep.equal(expected);
  });
});
