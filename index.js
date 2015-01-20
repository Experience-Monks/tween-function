module.exports = function( settings ) {

  var ease, delay, duration;

  settings = settings || {};

  ease = settings.ease || linear;
  delay = settings.delay || 0;
  duration = settings.duration || 1;
  duration -= delay;
    
  function tween( time, start, end ) {

    if( time > delay ) {

      time = ( time - delay ) / duration;

      return ( end - start ) * ease( time ) + start;
    } else {

      return start;
    }
  };

  return tween;
};


function linear( time ) {
  return time;
}