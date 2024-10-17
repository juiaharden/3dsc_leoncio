//OPERADOR TERNARIO
//SÃO USADO PARA SIMPLIFICAR O PROCESSO E TOMADA DE DECISÃO E, EVENTUALMENTE, SUBSTITUIR IF/ELSE

const idade = 18

if (idade >= 18) {
  console.log("Permitida a entrada");
} else {
  console.log("Proibido para menores");
}
//COM OPERAOR TERNARIO
const passe = idade >= 18 ? "Permitida a entrada" : "Proibida a entrada"
console.log(passe)