options( digits = 16 )
library( jsonlite )

alpha = 1.9
beta = 1.5
x = c( -0.1, 0, 0.1, 0.2, 0.5, 0.8, 0.9, 1, 1.1 )
y = pbeta( x, alpha, beta )

cat( y, sep = ",\n" )

data = list(
	alpha = alpha,
	beta = beta,
	data = x,
	expected = y
)

write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/number.json" )
