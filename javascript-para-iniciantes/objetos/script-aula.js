//Crie um objeto com os seus dados pessoais
//Deve possuir pelo menos duas propriedades nome e sobrenome
const dados = {
  nome: 'Ricardo',
  sobrenome: 'Martins',
  idade: 30,
  peso: 88.1,
  autura: 1.75,

//Cri um método no objeto anterior, quue mostre o seu nome completo
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  },
}

//Modifique o valor da propriedade preco para 3000

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000 //preco modificado 

console.log(carro.preco)

var cachorro = {
  raca: 'Labrador',
  pelo: 'Preto',
  idade: 10,
  latir(pessoa) {
    return pessoa === "homem" ? "Latir" : "Não latir" 
  }
}