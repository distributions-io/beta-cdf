options( digits = 16 )
library( jsonlite )

alpha = 2
beta = 2
x = 0:24/24
y = pbeta( x, alpha, beta )

cat( y, sep = ",\n" )

data = list(
	alpha = alpha,
	beta = beta,
	data = x,
	expected = y
)


write( toJSON( data, digits = 16, auto_unbox = TRUE ), "./test/fixtures/matrix.json" )
