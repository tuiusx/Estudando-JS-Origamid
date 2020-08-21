function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc(80, 1.75); //retorna o imc
console.log(imc(90, 1.75)); // retorna o imc e undefined


function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return 'Informe a sua idade!';
  }else if(idade >= 60) {
    return true;
  }else {
    return false;
  }
}
console.log(terceiraIdade(60))

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}
console.log(faltaVisitar(100))