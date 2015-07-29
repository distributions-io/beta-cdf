Cumulative Distribution Function
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Beta](https://en.wikipedia.org/wiki/Beta_distribution) distribution [cumulative distribution function](https://en.wikipedia.org/wiki/Cumulative_distribution_function).

The [cumulative distribution function](https://en.wikipedia.org/wiki/Cumulative_distribution_function) for a [Beta](https://en.wikipedia.org/wiki/Beta_distribution) random variable is

<div class="equation" align="center" data-raw-text="F(x;\alpha,\beta) = \dfrac{\operatorname{Beta}(x;\alpha,\beta)}{\operatorname{Beta}(\alpha,\beta)}" data-equation="eq:cdf">
	<img src="https://cdn.rawgit.com/distributions-io/beta-cdf/2860cfdb283f4a8f61168ac2b1c339b52632a1c5/docs/img/eqn.svg" alt="Cumulative distribution function for a Beta distribution.">
	<br>
</div>

where `alpha` is the first shape parameter and `beta` is the second shape parameter.

## Installation

``` bash
$ npm install distributions-beta-cdf
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var cdf = require( 'distributions-beta-cdf' );
```

#### cdf( x[, options] )

Evaluates the [cumulative distribution function](https://en.wikipedia.org/wiki/Cumulative_distribution_function) for the [Beta](https://en.wikipedia.org/wiki/Beta_distribution) distribution. `x` may be either a [`number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), or a [`matrix`](https://github.com/dstructs/matrix).

``` javascript
var matrix = require( 'dstructs-matrix' ),
	mat,
	out,
	x,
	i;

out = cdf( 0.5 );
// returns 0.5

x = [ 0.2, 0.4, 0.6, 0.8 ];
out = cdf( x, {
	'alpha': 2,
	'beta': 2
});
// returns [ ~0.104, ~0.352, ~0.648, ~0.896 ]

x = new Float32Array( x );
out = cdf( x, {
	'alpha': 2,
	'beta': 2
});
// returns Float64Array( [~0.104,~0.352,~0.648,~0.896] )

x = new Float32Array( 6 );
for ( i = 0; i < 6; i++ ) {
	x[ i ] = i / 6;
}
mat = matrix( x, [3,2], 'float32' );
/*
	[  0  1/6
	  2/6 3/6
	  4/6 5/6 ]
*/

out = cdf( mat, {
	'alpha': 2,
	'beta': 2
});
/*
	[  0     ~0.0741
	  ~0.259 ~0.5
	  ~0.741 ~0.926  ]
*/
```

The function accepts the following `options`:

*	__alpha__: first shape parameter. Default: `1`.
*	__beta__: second shape parameter. Default: `1`.
* 	__accessor__: accessor `function` for accessing `array` values.
* 	__dtype__: output [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) or [`matrix`](https://github.com/dstructs/matrix) data type. Default: `float64`.
*	__copy__: `boolean` indicating if the `function` should return a new data structure. Default: `true`.
*	__path__: [deepget](https://github.com/kgryte/utils-deep-get)/[deepset](https://github.com/kgryte/utils-deep-set) key path.
*	__sep__: [deepget](https://github.com/kgryte/utils-deep-get)/[deepset](https://github.com/kgryte/utils-deep-set) key path separator. Default: `'.'`.

A [Beta](https://en.wikipedia.org/wiki/Beta_distribution) distribution is a function of 2 parameter(s): `alpha`(first shape parameter) and `beta`(second shape parameter). By default, `alpha` is equal to `1` and `beta` is equal to `1`. To adjust either parameter, set the corresponding option(s).

``` javascript
var x = [ 0.2, 0.4, 0.6, 0.8 ];

var out = cdf( x, {
	'alpha': 10,
	'beta': 5
});
// returns [ ~0, ~0.0175, ~0.279, ~0.87 ]
```

For non-numeric `arrays`, provide an accessor `function` for accessing `array` values.

``` javascript
var data = [
	[0,0.2],
	[1,0.4],
	[2,0.6],
	[3,0.8]
];

function getValue( d, i ) {
	return d[ 1 ];
}

var out = cdf( data, {
	'alpha': 2,
	'beta': 2,
	'accessor': getValue
});
// returns [ ~0.104, ~0.352, ~0.648, ~0.896 ]
```


To [deepset](https://github.com/kgryte/utils-deep-set) an object `array`, provide a key path and, optionally, a key path separator.

``` javascript
var data = [
	{'x':[0,0.2]},
	{'x':[1,0.4]},
	{'x':[2,0.6]},
	{'x':[3,0.8]}
];

var out = cdf( data, {
	'alpha': 2,
	'beta': 2,
	'path': 'x/1',
	'sep': '/'
});
/*
	[
		{'x':[0,~0.104]},
		{'x':[1,~0.352]},
		{'x':[2,~0.648]},
		{'x':[3,~0.896]},
	]
*/

var bool = ( data === out );
// returns true
```

By default, when provided a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) or [`matrix`](https://github.com/dstructs/matrix), the output data structure is `float64` in order to preserve precision. To specify a different data type, set the `dtype` option (see [`matrix`](https://github.com/dstructs/matrix) for a list of acceptable data types).

``` javascript
var x, out;

x = new Float64Array( [0.2,0.4,0.6,0.8] );

out = cdf( x, {
	'alpha': 2,
	'beta': 2,
	'dtype': 'float32'
});
// returns Float32Array( [~0.104,~0.352,~0.648,~0.896] )

// Works for plain arrays, as well...
out = cdf( [0.2,0.4,0.6,0.8], {
	'alpha': 2,
	'beta': 2,
	'dtype': 'float32'
});
// returns Float32Array( [~0.104,~0.352,~0.648,~0.896] )
```

By default, the function returns a new data structure. To mutate the input data structure (e.g., when input values can be discarded or when optimizing memory usage), set the `copy` option to `false`.

``` javascript
var bool,
	mat,
	out,
	x,
	i;

x = [ 0.2, 0.4, 0.6, 0.8 ];

out = cdf( x, {
	'alpha': 2,
	'beta': 2,
	'copy': false
});
// returns [ ~0.104, ~0.352, ~0.648, ~0.896 ]

bool = ( x === out );
// returns true

x = new Float32Array( 6 );
for ( i = 0; i < 6; i++ ) {
	x[ i ] = i / 6;
}
mat = matrix( x, [3,2], 'float32' );
/*
	[  0  1/6
	  2/6 3/6
	  4/6 5/6 ]
*/

out = cdf( mat, {
	'alpha': 2,
	'beta': 2,
	'copy': false
});
/*
	[  0     ~0.0741
	  ~0.259 ~0.5
	  ~0.741 ~0.926  ]
*/

bool = ( mat === out );
// returns true
```


## Notes

*	If an element is __not__ a numeric value, the evaluated [cumulative distribution function](https://en.wikipedia.org/wiki/Cumulative_distribution_function) is `NaN`.

	``` javascript
	var data, out;

	out = cdf( null );
	// returns NaN

	out = cdf( true );
	// returns NaN

	out = cdf( {'a':'b'} );
	// returns NaN

	out = cdf( [ true, null, [] ] );
	// returns [ NaN, NaN, NaN ]

	function getValue( d, i ) {
		return d.x;
	}
	data = [
		{'x':true},
		{'x':[]},
		{'x':{}},
		{'x':null}
	];

	out = cdf( data, {
		'accessor': getValue
	});
	// returns [ NaN, NaN, NaN, NaN ]

	out = cdf( data, {
		'path': 'x'
	});
	/*
		[
			{'x':NaN},
			{'x':NaN},
			{'x':NaN,
			{'x':NaN}
		]
	*/
	```

## Examples

``` javascript
var cdf = require( 'distributions-beta-cdf' ),
	matrix = require( 'dstructs-matrix' );

var data,
	mat,
	out,
	tmp,
	i;

// Plain arrays...
data = new Array( 10 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = i - 5;
}
out = cdf( data );

// Object arrays (accessors)...
function getValue( d ) {
	return d.x;
}
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = {
		'x': data[ i ]
	};
}
out = cdf( data, {
	'accessor': getValue
});

// Deep set arrays...
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = {
		'x': [ i, data[ i ].x ]
	};
}
out = cdf( data, {
	'path': 'x/1',
	'sep': '/'
});

// Typed arrays...
data = new Float32Array( 10 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = i - 5;
}
out = cdf( data );

// Matrices...
mat = matrix( data, [5,2], 'float32' );
out = cdf( mat );

// Matrices (custom output data type)...
out = cdf( mat, {
	'dtype': 'uint8'
});
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/distributions-beta-cdf.svg
[npm-url]: https://npmjs.org/package/distributions-beta-cdf

[travis-image]: http://img.shields.io/travis/distributions-io/beta-cdf/master.svg
[travis-url]: https://travis-ci.org/distributions-io/beta-cdf

[codecov-image]: https://img.shields.io/codecov/github/distributions-io/beta-cdf/master.svg
[codecov-url]: https://codecov.io/github/distributions-io/beta-cdf?branch=master

[dependencies-image]: http://img.shields.io/david/distributions-io/beta-cdf.svg
[dependencies-url]: https://david-dm.org/distributions-io/beta-cdf

[dev-dependencies-image]: http://img.shields.io/david/dev/distributions-io/beta-cdf.svg
[dev-dependencies-url]: https://david-dm.org/dev/distributions-io/beta-cdf

[github-issues-image]: http://img.shields.io/github/issues/distributions-io/beta-cdf.svg
[github-issues-url]: https://github.com/distributions-io/beta-cdf/issues
