var pessoa = {
  nome: 'ricardo',
  idade: 30, 
}
console.log(pessoa)
console.log(pessoa.nome)

tuis = {

}; 

//Um Método é uma propriedade que possui uma função
var quadrado = {  // variável quadrado é um objeto
  lados: 4, // Propriedade
  area: function(lado) { //Método "area"
  // Ou pode escrever o método "area(lado)" assim 
    return lado * lado;
  },
  perimetro: function(lado) { //Método "perimetro"
    return this.lados * lado;
  },
};
console.log(quadrado.lados);
console.log(quadrado.area(5))
console.log(quadrado.perimetro(5))