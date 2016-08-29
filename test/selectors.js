var should = require('chai').should();
var store = require('../src/store');
var selectors = require('../src/selectors');

describe('Selectors', function(){

  it('should select the first player', function(){
    var player = selectors.player(store.getState());
    player.should.be.a('Number');
    player.should.equal(0);
  });

})
