// SET INTERVAL EXECUTA A CADA X MILISEGUNDOS
// let n = 0

// setInterval(function(){
//   console.clear()
//   console.log(n)
//   n++
// }, 1000)

// clearInterval()

// SET TIMEOUT EXECUTA APÓS X MILISEGUNDOS


// const intervalo = setInterval(function() {
//   console.clear()
//   console.log(`Contador: ${n}`)
//   n++
// }, 1000)

// setTimeout(function() {
//   clearInterval(intervalo)
//   // redirecionar para outra pagina
// location.href = 'https://www.google.com'
// }, 5000)

/** A PARTIR DOS CONCEITOS APRENDIDOS, RESOLVA:
 * A) CRIE UMA FUNÇÃO SETINTERVAL QUE RECEBA UMA FUNÇÃO E UM TEMPO DE 3S
 * B) DENTRO DELA IMPRIMA UM NUMERO RANDOMICO DE 1 A 10
 * C) APÓS PERCORRIDOS 8S, INTERROMPA COM O SETTIMEOUT
 */

const banana = setInterval(function(){
  let num = Math.round(Math.random() * 10)
  console.log(num)
}, 3000)