export class Vector {
	constructor(...args){
		if (args.length===1 && args[0] instanceof Array) {
			this.params = args[0]
		}else{
			this.params = args;
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
}