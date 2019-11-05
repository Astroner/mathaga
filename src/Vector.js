import { Matrix } from './Matrix.js'
import { Dot } from './Dot.js'

export class Vector {
	constructor(...args){
		if (args.length===1 && args[0] instanceof Array){

			this.params = [];
			for (var i = 0; i < args[0].length; i++) {
				if (args[0][i] instanceof Vector) {
					this.params = this.params.concat(args[0][i].params)
				}if (args[0][i] instanceof Array) {
					this.params = this.params.concat(args[0][i])
				}else if (typeof(args[0][i]) === "number"){
					this.params.push(args[0][i])
				}
			}

		}else if (args.length===1 && args[0] instanceof Dot) 
			this.params = args[0].params.slice(0)
		else if (args.length===2 && (args[0] instanceof Dot || args[0] instanceof Array) && (args[1] instanceof Dot || args[1] instanceof Array)){

			let start = args[0] instanceof Dot ? args[0].params.slice(0) : args[0],
				end = args[1] instanceof Dot ? args[1].params.slice(0) : args[1],
				max = start.length > end.length ? start.length : end.length;
				this.params = [];
			for (let i = 0; i < max; i++) {
				this.params[i] = (end[i] || 0) - (start[i] || 0)
			}
		}else{
			this.params = [];
			for (var i = 0; i < args.length; i++) {
				if (args[i] instanceof Vector) {
					this.params = this.params.concat(args[i].params)
				}if (args[i] instanceof Array) {
					this.params = this.params.concat(args[i])
				}else if (typeof(args[i]) === "number"){
					this.params.push(args[i])
				}
			}
		}

	}

	plus(vector){
		let opt = [],
			res = [];
		if (vector instanceof Array) {
			opt = vector
		}else if(vector instanceof Vector){
			opt = vector.params
		}
		let max = opt.length > this.params.length ? opt.length : this.params.length;
		for (var i = 0; i < max; i++) {
			res[i] = (this.params[i] || 0) + (opt[i] || 0)
		}
		return new Vector(res)
	}
	p(vector){ return this.plus(vector) }

	multi(multiplier){
		if (typeof(multiplier) === "number") 
			return new Vector(this.params.map(num => num * multiplier))
	}
	i(m){ return this.multi(m) }

	divide(d){ return this.multi(1/d) }
	d(d){ return this.multi(1/d) }

	minus(vector){
		let opt = [],
			res = [];
		if (vector instanceof Array) {
			opt = vector
		}else if(vector instanceof Vector){
			opt = vector.params
		}
		let max = opt.length > this.params.length ? opt.length : this.params.length;
		for (var i = 0; i < max; i++) {
			res[i] = (this.params[i] || 0) - (opt[i] || 0)
		}
		return new Vector(res)
	}
	m(e){ return this.minus(e) }

	normalize(){
		return new Vector(this.params.map(item => item / this.length()))
	}

	length(){
		return Math.sqrt(this.params.reduce((prev, item) => prev + (item * item), 0))
	}

	dot(vector){
		let opt = [];

		if (vector instanceof Array) {
			opt = vector
		}else if(vector instanceof Vector){
			opt = vector.params
		}

		return opt.reduce((prev, num, i) => prev + num * (this.params[i] ? this.params[i] : 0), 0)
	}

	angle(vector){
		return Math.acos(this.cos(vector))
	}

	cos(vector){
		return +(
			this.dot(vector)/( this.length() * (
				vector instanceof Array ? Vector.prototype.length.call({ params: vector }) :
				vector.length()
			) )
		).toFixed(2)
	}

	reverse(){
		return new Vector(this.params.map((item) => -1 * item))
	}
	r(){ return this.reverse() }

	copy(){ return new Vector(this.params.slice(0)) }





	toMatrix(){ return new Matrix([this]) }
	tm(){ return this.toMatrix() }

	toDot() { return new Dot(this) }
	td() { return this.toDot() }
}