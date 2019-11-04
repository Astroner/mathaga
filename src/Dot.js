import { Vector } from './Vector.js'
import { Matrix } from './Matrix.js'

export class Dot{
	constructor(params){
		this.params = [0, 0, 0];

		if (arguments.length === 1) {
			if (params instanceof Vector) this.params = params.params.slice(0);
			else if(params instanceof Array) this.params = params
		}else {
			this.params = [...arguments]
		}
	}


	toVector(){ return new Vector(this) }
	tv(){ return this.toVector() }

	toMatrix(){ return new Matrix([this]) }
	tm(){ return this.toMatrix() }

}