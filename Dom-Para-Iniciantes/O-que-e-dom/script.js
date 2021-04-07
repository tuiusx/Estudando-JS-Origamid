//Document Object Model (DOM)
//É uma interface que representa documentos HTML e XML através de objetos.
//Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos.

console.log(window);
//window é o objeto global do browser possui diferentes métodos e propriedades

console.log(window.innerHeight); //retorna a altura do browser  

//Window e Document
//São os objetos priincipais do DOM, boa parte da manipulação é feita através dos métodos e propriedades
window.alert("Isso é um alerta");
//window é o objeto global, por isso não precisamos chamar ele na frente dos seus métodos e propriedades.
alert('Isso também é um alerta');

const h1Selecionado = document.querySelector('h1'); //Seleciona p primeiro h1
document.body; //retorna o body

h1Selecionado.innerHeight; // retorna o texto;
h1Selecionado.classList; // retorna as classes 
h1Selecionado.id; // retorna o id
h1Selecionado.offsetHeight; // retorna a altur do elemento;

//ativa a função callback ao click no titulo
h1Selecionado.addEventListener('click', function() {
  console.log('Clicou em', h1Selecionado.innerText);
});
