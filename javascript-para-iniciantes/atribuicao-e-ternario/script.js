// Operadores de Atribuição

var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)


//Operador Ternário
//Abreviação de condicionais com if e else

var idade = 19;
//condição ? true : false
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber)

// if Abreviado
//Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código

var possuiFaculdade = true;

if(possuiFaculdade) console.log('Possui Faculdade');
else console.log('Não possui faculdade');

//ou

if(possuiFaculdade) 
  console.log('Possui Faculdade');
else 
  console.log('Não possui faculdade');