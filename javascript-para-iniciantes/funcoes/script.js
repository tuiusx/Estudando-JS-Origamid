// Crie uma função para verificar se um valor é Truthy
function verificar(valor) {
  if(!!valor === true) {
    console.log('Esse valor e verdadeiro')
  }else {
    console.log('Esse valor é falso')
  }
}
verificar()
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function somaPerimetro(valor) {
  console.log(`O calculo do perímetro é ${valor * 4}`)
}
somaPerimetro(70)

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return nome + ' ' + sobrenome
}
console.log(nomeCompleto('Ricardo', 'Martins'))

// Crie uma função que verifica se um número é par
function numeroPar(numero) {
  if(numero % 2 === 0) {
    console.log(`Esse número ${numero} é par.`)
  }else {
    console.log(`Esse número ${numero} não é par`)
  }
}
numeroPar(9)

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado) {
  return typeof dado
}
console.log(tipoDado(""));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer
addEventListener('click', function() {
  console.log('Ricardo Martins');
});

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));