/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const alfabeto = prompt('inserisci una lettera')

// Dichiara la funzione qui.
function ricerca(arrayStringhe, lettera) {
  let arrayFiltrato = [];
  for(let i = 0; i < arrayStringhe.length; i++) {
   if (arrayStringhe[i][0].includes(lettera)) {
    arrayFiltrato.push(arrayStringhe[i])
    }                                      
  }
  return arrayFiltrato
}
// Invoca la funzione qui e stampa il risultato in console

console.log(ricerca(names, alfabeto))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
