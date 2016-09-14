var should = require('chai').should();
var Store = require('../src/store');
var actions = require('../src/actions');

describe('Store', function(){
  it('should initialize store with default state', function(){
    var expected = {
      turn: 0,
      board: [ null, null, null, null, null, null, null, null, null ],
      players: [ { id: null }, { id: null } ]
    };
    var store = Store.create();
    var state = store.getState();
    state.should.deep.equal(expected);
  });

  it('should update state on play actions', function(){
    var expected = {
        turn: 1,
        board: [ 0, null, null, null, null, null, null, null, null ],
        players: [ { id: null }, { id: null } ]
    };

    var store = Store.create();
    store.dispatch(actions.play(0, 0));
    var state = store.getState();
    state.should.deep.equal(expected);

    var nextExpected = {
        turn: 2,
        board: [ 0, 1, null, null, null, null, null, null, null ],
        players: [ { id: null }, { id: null } ]
    };
    store.dispatch(actions.play(1, 1));
    var nextState = store.getState();
    nextState.should.deep.equal(nextExpected);
  });
});
