# tween-function

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Creates a function which can be used to animate values. Supports ease functions and delay.

## Usage

[![NPM](https://nodei.co/npm/tween-function.png)](https://www.npmjs.com/package/tween-function)

### Example
```javascript
var builder = require( 'tween-function' );
var ease = require( 'eases/back-in' );

var tween = builder( {
  
  delay: 2, // if no delay is passed delay is 0
  duration: 10, // if no duration is passed duration is 1
  ease: ease // ease function should accept one property between 0-1
             // if no ease is passed a linear ease will be used.
});

var time = 6;
var start = 10;
var end = 100;

console.log( tween( time, start, end ) ); // value with ease applied
```

## License

MIT, see [LICENSE.md](http://github.com/mikkoh/tween-function/blob/master/LICENSE.md) for details.
