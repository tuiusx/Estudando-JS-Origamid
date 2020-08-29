//Some 500 ao valor de scroll abaixo,
//atribuindo o novo valor a scroll
var scroll = 1000;
console.log(scroll /= 2);

//atribua true para a variável darCredito, caso o cliente possua carro e casa.
//E false caso o contrário.
var possuiCarro = true;
var possuiCasa = false;
var darCredito = (possuiCarro === true && possuiCasa === true) ? 'Crédito aprovado' : 'Crédito negado';

console.log(darCredito)