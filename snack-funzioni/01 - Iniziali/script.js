/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];




// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console


const inizialiArray = (array) => {
  let iniziale = '';
  for(let i = 0; i < array.length; i++) {
   iniziale += array[i].split("").at(0)
   //oppure iniziale += array[i][0]
 }
 return iniziale.split("")
}

console.log(inizialiArray(names))



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
