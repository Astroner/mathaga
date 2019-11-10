## Mathaga

Mathaga is powerful js library for linear algebra

### Instalation
>npm i --save mathaga

### Usage

```javascript
	import * as Mathaga from 'mathaga'
	const vec = new Mathaga.Vector(2, 2, 2)
	//or
	const vec = new Mathaga.Vector([2, 2, 2])
```
### Vectors

Vector is basic element of linear algebra.

```javascript
	import { Vector } from 'mathaga'

	const vec = new Vector(2, 2, 2)
	const vec2 = new Vector(0, 2, 0)

	//get length
	const length = vec.length();

	//get new normilized vector
	const n = vec.normalize()

	//add vec2 to vec
	let result = vec.plus(vec2) //as is
	// or
	result = vec.p(vec2) //short way

	//vec - vec2
	result = vec.minus(vec2)
	// or
	result = vec.m(vec2)

	//multiply vector by 4
	result = vec.multi(4)
	// or
	result = vec.i(4)

	//divide vector by 4
	result = vec.divide(4)
	// or
	result = vec.d(4)

	//dot product of vec and vec2
	result = vec.dot(vec2)

	//get cos between vec and vec2
	result = vec.cos(vec2)

	//angle between vec and vec2
	result = vec.angle(vec2)

	//get reversed vector
	result = vec.reverse()
	// or
	result = vec.r()

	//get copy of the vector
	result = vec.copy()

	//get vector product
	result = vec.vect(vec2)

	//transform vector to a matrix
	result = vec.toMatrix()
	// or
	result = vec.tm()

	//transform the vector to a dot pushed off the center
	result = vec.toDot()
	// or 
	result = vec.td()
``` 