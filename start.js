import { Vector, Matrix, Dot } from './src/'

const vec1 = new Vector(2, 2, 2),
	  vec2 = new Vector([2], 2);


let result = new Vector(new Matrix([vec1, vec2, vec2])
	.multi(2)
	.tv())


console.log(vec2)