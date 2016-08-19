var PLAY = exports.PLAY = 'PLAY';

exports.play = function(index){
  return {
    type: PLAY,
    cell: index
  };
};
