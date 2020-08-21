
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual

var idade = 30
var parente = 30
if(idade > parente) {
  console.log('minha idade e maior.')
}else if(idade === parente) {
  console.log('Nós temos a mesma idade')
}else {
  console.log('O parente e mais velho')
};
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em mi
var brasil = 207;
var china = 1340;

if(brasil > china) {
  console.log(`Brasil e maior q a china com ${brasil} milhões de habitantes`)
}else {
  console.log(`China e maior que o Brasi com ${china} milhões de habitantes`)
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
 console.log('Verdadeiro');
} else {
 console.log('Falso'); //falso
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
 console.log('Gato' && 'Cão');//cão
} else {
 console.log('Falso');
}