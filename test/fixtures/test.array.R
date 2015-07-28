options( digits = 16 )
library( jsonlite )

alpha = 3
beta = 17
x = seq( 0, 1, 0.01 )
y = pbeta( x, alpha, beta )

cat( y, sep = ",\n" )

data = list(
	alpha = alpha,
	beta = beta,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/array.json" )
