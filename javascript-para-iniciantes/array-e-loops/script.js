var videoGames = ['Switch', 'Ps4', 'Xbox One'];
console.log(videoGames);

console.log('');

var aparelho = videoGames.pop(); //Remove o útimo elemento do Array
console.log(aparelho, 'removido da lista');
console.log(videoGames)

console.log('');

console.log('Adicionando o 3DS');
videoGames.push('3DS'); //Adiciona ao final do array 
console.log(videoGames)

console.log('');

console.log(videoGames.length); //Conta quantos elementos tem dentro do array

console.log('');

console.log('for()');
//o for loop possui 3 partes, início, condição e incremento.
//       início       condição     incremento    
for (var numero = 0; numero <= 10; numero++) {
  console.log(numero)
}

console.log('');

console.log('While Loop');
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
console.log('');

console.log('for() com condição');
var games = ['Switch', 'Ps4', 'Xbox One', '3DS', 'Sega saturno', 'Super ness'];

for(item = 0; item < games.length; item++ ) {
  if(games[item] === 'Ps4') {
    console.log(games[item]);
    break
  }
}

console.log('');

console.log('forEach');
games.forEach(function(item, index) {
  console.log(item, index)
});