'use strict';

// MODULES //

var partial = require( './partial.js' );


// CDF //

/**
* FUNCTION: cdf( out, matrix, alpha, beta )
*	Evaluates the cumulative distribution function (CDF) for a Beta distribution with first shape parameter `alpha` and second shape parameter `beta` for each matrix element.
*
* @param {Matrix} out - output matrix
* @param {Matrix} arr - input matrix
* @param {Number} alpha - first shape parameter
* @param {Number} beta - second shape parameter
* @returns {Matrix} output matrix
*/
function cdf( y, x, alpha, beta ) {
	var len = x.length,
		fcn,
		i;
	if ( y.length !== len ) {
		throw new Error( 'cdf()::invalid input arguments. Input and output matrices must be the same length.' );
	}
	fcn = partial( alpha, beta );
	for ( i = 0; i < len; i++ ) {
		y.data[ i ] = fcn( x.data[ i ] );
	}
	return y;
} // end FUNCTION cdf()


// EXPORTS //

module.exports = cdf;
