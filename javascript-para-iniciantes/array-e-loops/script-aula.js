//Crie um array com os anos que o Brasil ganho a copa
//1959, 1962, 1970, 1994, 2002

var ano = [1959, 1962, 1970, 1994, 2002];

//Interaja com o array utilizando um loop, para mostrar
//no console a seguinte mensagem, 'O Brasil ganhou a copa de ${ano}'
for(var copa = 0; copa < ano.length; copa++ ) {
  console.log(`O Brasil ganho a copa de ${ano[copa]}`)
}

console.log('')
//Interaja com um loop nas frusta e pare qunado chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var fruta = 0; fruta <frutas.length; fruta++) {
  if(frutas[fruta] === 'Pera') {
    console.log(`Achei a ${frutas[fruta]}`)
    break
  }
}
console.log('')

//Coloque a última fruta do array acima em uma variável,
//sem remover a mesma do array.
var ultimaFruta = frutas[frutas.length - 1];

console.log(ultimaFruta)