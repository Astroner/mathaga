import { Vector, Matrix, Dot } from './src/'

const vec1 = new Vector(2, 4, 58),
	  vec2 = new Vector(0, 2, 1);


let result = vec1.vect(vec2)


console.log(result.cos(vec1), result.cos(vec2))