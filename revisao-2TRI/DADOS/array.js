// ARRAY = Estrutura de dadls indexada
// SAO ITERAVEIS, OU SEJA, PODEMOS PERCORRER ATE SEU LIMITE

// LOOPS / CICLO E REPETIÇAO = for, for in, for off, for each
// for > INICIALIZAÇAO, CONDIÇAO DE PARADA, INCREMENTO (PASSO OU STEP)

const pokemonList = ['Pikachu', 'Bulbassauro', 'Charmander', 'Squirtle']
// INDICES          0              1           2           3    ....

console.log(pokemonList[3]) //Squirtle
  for(let i= 0; i < pokemonList.length; i++){
    console.log(pokemonList[i])
  //ALGUMA COISA (++ = UM EM UM)
}

for (let pokemon in pokemonList) {
  console.log(pokemonList[pokemon]);
}


for(let pokemon of pokemonList){
  console.log(pokemon)
}

// FOR IN 
                