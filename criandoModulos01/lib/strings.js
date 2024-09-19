const meuNome = "Julia";

function imprimeNome() {
  console.log(`meu nome é ${meuNome}`);
}
// EXPORTAÇÃO IMEDIATA
export function caixaAlta(nome) {
  return nome.toUpperCase();
}
// EXPORTAÇÃO IMEDIATA
export function caixaBaixa(nome) {
  return nome.toLowerCase();
}
//EXPORTAÇÂO DEFAULT (PADRÂO)
function separarPorHifen(nome) {
  return nome.split("").join("-");
}
export default separarPorHifen;
// EXPORTAÇÃO POTERIOR DE VALORES
export {meuNome, imprimeNome }; 