import { Vector } from './Vector.js';
import { Dot } from './Dot.js'

export class Matrix {
	constructor(inits){
		let maxLength = 0;
		let prevL = 0;
		this.inits = inits.map((item, i) => {
			let opt = [];

			if (item instanceof Vector) opt = item.params.slice(0)
			else if (item instanceof Array) opt = item
			else if (item instanceof Dot) opt = item.params.slice(0)

			if (opt.length > maxLength) maxLength = opt.length

			return opt
		})
			.map((item) => item.concat(new Array(maxLength - item.length).fill(0)));

		this.height = this.inits.length;
		this.width = maxLength;
		this.squared = this.height === this.width;
	}

	multi(multiplier){
		if (typeof(multiplier) === "number") {
			return new Matrix(this.inits.map((row) => row.map((col) => col * multiplier)))
		}else if (multiplier instanceof Vector || multiplier instanceof Matrix) {

			/*Усли матрица на вектор, то возвращается новый вектор*/
			return this //TODO
		}else{
			return this
		}
	}
	m(m){ return this.multi(m) }



	toVectors(){
		return this.inits.map((item) => new Vector(item.slice(0)))
	}
	tv(){ return this.toVectors() }

	toDots(){
		return this.inits.map((item) => new Dot(item.slice(0)))
	}
	td(){ return this.toVectors() }
}