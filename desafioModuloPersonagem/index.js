// CRIE UM MODULO ESM "personagem.js"
// CRIE FUNÇOEPAERA:
// IMPRIMIR UM OBJETO COM NOME, PODER, VIDA;
// EXPORYTE A FUNÇAO (ImprimirDadoPersonagem) PARA OUTRO MODULO
//IMPORTE O MODULO (ImprimirDadoPersonagem) NO SEU ARQUIVO
// INDEX.JS
// UTILIZE O MODULO IMPORTADO

import { imprimirDadosPersonagem } from "./lib/personagem.js";

console.log(imprimirDadosPersonagem("Mare Barrow", "Eletrecidade", "Feminino"));

// CRIE UM MODULO CJS (.cjs)
// IMPORTE AS FUNÇOES  (PATH< FS) -> require (``)
//EXPORTAR PATH E F5
//DINALMENTE IMPOTE-O AQUI NO INDEX

import {path, fs} from './modulos/bil.cjs';

console.log(path);
console.log(fs);
