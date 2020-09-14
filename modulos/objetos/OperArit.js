class OperArit {
	constructor(var1, var2){
		this.var1 = var1;
		this.var2 = var2;
	}
	soma () {
		return (this.var1 + this.var2) 
	}

	sub () {
		return (this.var1 - this.var2) 
	}

	mult () {
		return (this.var1 * this.var2)
	}
	
	div () {
		return (this.var1 / this.var2)
	}

	mod () {
		return (this.var1 % this.var2)
	}

	pot () {
		return (this.var1 ** this.var2)
	}

}

module.exports = OperArit;