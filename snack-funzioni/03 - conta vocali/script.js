/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function contatoreVocali(stringa) {
  const vocali = 'aeiou';
  let vocaliContate;
  for (let i = 0; i < vocali.length; i++){
    for (let c = 0; c < stringa.length; c++){
      if (vocali[i] === stringa[c].split("")){
        vocaliContate++
      }
    }
  }
return vocaliContate
}
console.log(contatoreVocali(word));

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)