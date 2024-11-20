/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function contatoreVocali(stringa) {
  stringa = stringa.toLowerCase();
  const vocali = 'aeiou';
  let vocaliContate = 0;
  for (let i = 0; i < vocali.length; i++){
    for (let c = 0; c < stringa.length; c++){
      if (vocali[i] === stringa[c]){
        vocaliContate++
      }
    }
  }
return vocaliContate;
}

// ALTERNATIVA CON .INCLUDES

function contatoreVocaliConIncludes(stringa) {
  stringa = stringa.toLowerCase();
  const vocali = 'aeiou';
  let vocaliContate = 0;
  for (let i = 0; i < stringa.length; i++){
    if (vocali.includes(stringa[i])) {
      vocaliContate++
    }
        
  }
  return vocaliContate;
}

  


// Invoca la funzione qui e stampa il risultato in console

console.log(contatoreVocali(word))
console.log(contatoreVocaliConIncludes(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)