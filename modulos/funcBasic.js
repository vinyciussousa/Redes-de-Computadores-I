/*
	function <nome> (parametros) {

	} 
*/

/*
	function somar () {
		var x, y; x = 10; y = 10;
		var soma = x + y;
		console.log(soma);
	}
*/

function modulo () {

	const somar = function (x, y) {
		var soma = x + y;
		return soma;
	}

	var z = somar(20,20); // chamada
	console.log(z);

	var z = somar(15,15);
	console.log(z);

	var z = somar(.2,2.5);
	console.log(z);
}

module.exports = {modulo};