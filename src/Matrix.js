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

	getDet(){
		if (!this.squared) {
			console.error("This matrix is not squared")
			return 0
		}
		return this.__calcRow(this.inits);
	}
	gd(){ return this.getDet() }

	__calcRow(mat){
		if (mat.length === 1) return mat[0][0]
		if (mat.length === 2) {
			return mat[0][0] * mat[1][1] - mat[0][1] * mat[1][0]
		}
		if (mat.length === 3) {
			return (
				mat[0][0] * mat[1][1] * mat[2][2] + 
				mat[0][1] * mat[1][2] * mat[2][0] + 
				mat[0][2] * mat[1][0] * mat[2][1])
				-
				mat[0][2] * mat[1][1] * mat[2][0] -
				mat[0][0] * mat[1][2] * mat[2][1] - 
				mat[0][1] * mat[1][0] * mat[2][2]
		}
		return mat[0].reduce((prev, item, i) => {
			if (!item) return prev;
			const apl = [];

			for (let j = 1; j < mat.length; j++) {
				const newRow = [];

				for (let k = 0; k < mat[j].length; k++) {
					if (k === i) continue;
					newRow.push(mat[j][k])
				}

				apl.push(newRow)
			}
			return prev + Math.pow(-1, i) * item * this.__calcRow(apl)
		}, 0)
	}

	toVectors(){
		return this.inits.map((item) => new Vector(item.slice(0)))
	}
	tv(){ return this.toVectors() }

	toDots(){
		return this.inits.map((item) => new Dot(item.slice(0)))
	}
	td(){ return this.toVectors() }
}