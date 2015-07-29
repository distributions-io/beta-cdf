'use strict';

// MODULES //

var betainc = require( 'compute-betainc/lib/numbers.js' );


// CDF //

/**
* FUNCTION: cdf( x, alpha, beta )
*	Evaluates the cumulative distribution function (CDF) for a Beta distribution with first shape parameter `alpha` and second shape parameter `beta` at a value `x`.
*
* @param {Number} x - input value
* @param {Number} alpha - first shape parameter
* @param {Number} beta - second shape parameter
* @returns {Number} evaluated CDF
*/
function cdf( x, alpha, beta ) {
	if ( x !== x ) {
		return NaN;
	}
	if ( x <= 0 ) {
		return 0;
	}
	if ( x >= 1 ) {
		return 1;
	}
	return betainc.lower( x, alpha, beta );
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
