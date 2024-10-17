//console.log(pessoas[2].nome)  (PARA PUXAR SOMENTE 1 )

/*Para cada pessoa dentro de pessoaS, printa pra mim o nome de cada dessa peoas
for(pessoa of pessoas) {
  console.log(pessoa.nome)
}*/
const pessoas = [
  { nome: "Julia", sexo: "F" },
  { nome: "Kevin", sexo: "M" },
  { nome: "Renan", sexo: "M" },
  { nome: "Renata", sexo: "F" },
];

const meninas = [];
const meninos = [];

function filtroPessoas(arrPessoas) {
  if (typeof arrPessoas == "object") {
    //CHECA SE É UM ARRAY/OBJETO
    for (pessoa of arrPessoas) {
      //ITERA OBRE CADA ITEM E PESSOAS
      pessoa.sexo == "F" // CHECA A PROPRIEDADE "SEXO"
        ? meninas.push(pessoa) //CASO F
        : meninos.push(pessoa); //CASO M
    }
  } else {
    console.error(arrPessoas); //SENAO IMPRIME UM ERRO
  }
}
filtroPessoas(pessoas); //FUNçaO PARA REAPROVEITAMENTO DE CODIGO

console.log("----meninas----");
console.log(meninas);
console.log("----meninos----");
console.log(meninos);
