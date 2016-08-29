var should = require('chai').should();
var Store = require('../src/store');
var reducers = require('../src/reducers');
var selectors = require('../src/selectors');
var actions = require('../src/actions');

describe('Selectors', function(){

  it('should select the first player', function(){
    var store = Store.create();
    var player = selectors.player(store.getState());
    player.should.be.a('Number');
    player.should.equal(0);

    store.dispatch(actions.play(0, 0));
    var nextPlayer = selectors.player(store.getState());
    nextPlayer.should.be.a('Number');
    nextPlayer.should.equal(1);

  });

  it('should present the winner if any', function(){
    var winner = selectors.winner(reducers.board());
    should.not.exist(winner);

    var board = [1, 1, 1, 0, 0, null, 0, null, null];
    var aWinner = selectors.winner(board);
    aWinner.should.be.a('Number');
    aWinner.should.equal(1);

    var board = [1, 0, 1, null, 0, null, null, 0, null];
    var bWinner = selectors.winner(board);
    bWinner.should.be.a('Number');
    bWinner.should.equal(0);
  });

});
