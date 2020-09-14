/*
class <nome> {

}
*/

class Pessoa {
	constructor (peso, altura) {
		this.peso = peso;
		this.altura = altura;
	}

	imc (peso, altura) {
		let imc = this.peso / (this.altura * this.altura);
		return imc;
	}
}

module.exports = Pessoa;