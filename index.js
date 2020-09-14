const Pessoa = require('./modulos/objetos/Pessoa.js');

const marcos = new Pessoa(80, 1.85); // instanciando objeto

console.log(marcos.imc());

const joao = new Pessoa();
joao.peso = 80;
joao.altura = 1.75;
console.log(joao.imc());