//declarar funções
function imprimeOla() {
  console.log("Oii");
}
function olaPessoa(nome) {
  console.log("Oii, " + nome);
}

let salario = 1000;

// SET INTERVAL
// setInterval(function () {
//   salario = salario + 100;
//   console.clear();
//   console.log(`Salário:  R$${salario},00`);
// }, 2000);

// crie uma função que retorne um objeto js e execute a msm a cada 1 segundo
// através de um setInterval()

let juliazinha = {
  nome: "Julia",
  sobrenome: "Zinha",
  TarefasDoDia: 500,
};

const intervalo = setInterval(function () {
  juliazinha.TarefasDoDia = juliazinha.TarefasDoDia + 1;
  console.clear();
  console.log(juliazinha);
}, 500);

setTimeout(function () {
  clearInterval(intervalo);
  console.log("fim");
}, 3000)

// //invocar funções
// imprimeOla();
// olaPessoa("Joana");
// olaPessoa("Roberto");
