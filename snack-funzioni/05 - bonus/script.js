/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function salutoResponsive(nome) {
  const adesso = new Date()
  if (adesso.getHours() <= 13 ) {
    return `Buongiorno ${nome}`
  } else if (adesso.getHours() <= 17) {
    return `Buon pomeriggio ${nome}`
  } else {
    return `Buonasera ${nome}`
  }
}


// Invoca la funzione qui e stampa il risultato in console

console.log(salutoResponsive(name))

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.