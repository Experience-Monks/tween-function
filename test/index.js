var test = require( 'tape' );
var tweenFunction = require( './..' );
var ease = require( 'eases/back-in' );

test( 'without duration', function( t ) {

  var tween = tweenFunction();

  var start = 0;
  var end = 10;

  t.plan( 3 );

  t.equal( tween( 0, start, end ), start, 'start value is correct' );
  t.equal( tween( 0.5, start, end ), ( end - start ) * 0.5 + start, 'mid value is correct' );
  t.equal( tween( 1, start, end ), end, 'end value is correct' );
});


test( 'without duration and with delay', function( t ) {

  var tween = tweenFunction( {

    delay: 0.2
  });

  var start = 0;
  var end = 10;

  t.plan( 3 );

  t.equal( tween( 0, start, end ), start, 'start value is correct' );
  t.equal( Math.round( tween( 0.6, start, end ) ), ( end - start ) * 0.5 + start, 'mid value is correct' );
  t.equal( tween( 1, start, end ), end, 'end value is correct' );
});


test( 'with duration and delay', function( t ) {

  var tween = tweenFunction( {

    duration: 10,
    delay: 2,
    // ease: ease
  });

  var start = 0;
  var end = 10;

  t.plan( 3 );

  t.equal( tween( 0, start, end ), start, 'start value is correct' );
  t.equal( tween( 6, start, end ), ( end - start ) * 0.5 + start, 'mid value is correct' );
  t.equal( tween( 10, start, end ), end, 'end value is correct' );
});

test( 'with duration, delay, ease', function( t ) {

  var tween = tweenFunction( {

    duration: 10,
    delay: 2,
    ease: ease
  });

  var start = 0;
  var end = 10;

  t.plan( 3 );

  t.equal( tween( 0, start, end ), start, 'start value is correct' );
  t.equal( Math.round( tween( 6, start, end ) ), -1, 'mid value is correct' );
  t.equal( Math.round( tween( 10, start, end ) ), end, 'end value is correct' );
});
