var should = require('chai').should();
var Store = require('../src/store');
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

});
