import { Vector, Matrix, Dot } from './src/'

const vec1 = new Vector(2, 2, 2),
	  vec2 = new Vector(2, 2);


let result = new Matrix([vec1, vec2, vec2])
	.multi(2)
	.tv()[0]


console.log(result.td().tm(), new Dot(2, 2).tv())