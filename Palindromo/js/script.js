// Dichiaro la variabile della parola che dovrà inserire l'utente
const userWord = prompt("Inserisci una parola");

// Dichiaro la variabile per usare il singolo carattere della parola
let char;

// Dichiaro la variabile per la parola inversa
let invertedWord = "";

// Uso la funzione creata
reverseWord(userWord);

console.log(invertedWord);

// Condizione per il risultato se palindroma
if(userWord == invertedWord){
    console.log('La parola è palindroma');
  } else {
    console.log('La parola non è palindroma');
    }


// Dichiaro la funzione per invertire la parola
function reverseWord(userWord){

  let i = userWord.length - 1;

  // Ciclo while per spezzare la parola e ricostruirla invertita
  while (i >= 0) {
    char = userWord[i];
    invertedWord += char;
    console.log(char);
    i--;
  }

  return invertedWord;
}