const OperArit = require('./modulos/objetos/OperArit.js');

var calculadora = new OperArit(10, 5);

console.log(calculadora.soma());
console.log(calculadora.sub());
console.log(calculadora.mult());
console.log(calculadora.div());
console.log(calculadora.mod());
console.log(calculadora.pot());