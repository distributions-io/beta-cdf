'use strict';

// MODULES //

var betainc = require( 'compute-betainc' );


// PARTIAL //

/**
* FUNCTION: partial( alpha, beta )
*	Partially applies first shape parameter `alpha` and second shape parameter `beta` and returns a function for evaluating the cumulative distribution function (CDF) for a Beta distribution.
*
* @param {Number} alpha - first shape parameter
* @param {Number} beta - second shape parameter
* @returns {Function} CDF
*/
function partial( alpha, beta ) {

	/**
	* FUNCTION: cdf( x )
	*	Evaluates the cumulative distribution function (CDF) for a Beta distribution.
	*
	* @private
	* @param {Number} x - input value
	* @returns {Number} evaluated CDF
	*/
	return function cdf( x ) {
		if ( x !== x ) {
			return NaN;
		}
		if ( x <= 0 ) {
			return 0;
		}
		if ( x >= 1 ) {
			return 1;
		}
		return betainc( x, alpha, beta );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
