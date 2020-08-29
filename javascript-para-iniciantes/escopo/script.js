function mostrarCarro(){
  var carro = 'Fusca';
  console.log(carro);
}
mostrarCarro(); //Fusca no console
//console.log(carro); //Erro, carro is not defined

//Ao utilizar VAR dentro de um IF, For Loop ou em um Bloco,
//o valor da variável utilizada irá VAZAR e existir fora do bloco

// var Vaza o bloco
if(true) {
  const mes = 'Maio';
  console.log(mes);
}
//console.log(mes)

//{} cria um bloco

{
  var carranga = 'Opala';
  const ano = 1960;
}

console.log(carranga); // Opala
//console.log(ano); //erro ano is not defined

//For Loop
// for loop sempre se escreve com let para n vazar a variável
 for(var i = 0; i < 10; i++) {
   console.log(`Número ${i}`);
 }
 console.log(`Valor do lado de fora ${i}`); //O i é o mesmo que está sendo usado dento do for 

 //Const
 //Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor 
 //da variável, evitando bugs no código.

const mes = 'Dezembro';
//mes = 'Janeiro'; // erro, tentou modificar o valor
//const semana; // erro, declarou sem valor
console.log(mes)

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29 // Funciona
//data = 'Janeiro'; // erro
console.log(data)
console.log(`dia ${data.dia}`)

//Let
//Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável

let ano1;
ano1 = 2018;
ano1++;
console.log(ano1); // 2019

//let ano1 = 2020; //erro, redeclarou a variável