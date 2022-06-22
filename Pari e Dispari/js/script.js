// L'utente sceglie se vuole pari o dispari
let choice = prompt("Scrivi la tua scelta: 'pari' o 'dispari'");
while ((choice != "pari") && (choice != "dispari")){
    choice = prompt("Scrivi 'pari' o 'dispari'");
}

console.log("Hai scelto: " + choice);

// L'utente inserisce un numero da 1 a 5
let userNumber = parseInt( prompt("Inserisci un numero da 1 a 5"));
while ((userNumber < 1 ) || (userNumber > 5)){
    userNumber = prompt("Inserisci un numero da 1 a 5");
}
console.log("Hai scelto: " + userNumber);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
    //The maximum is exclusive and the minimum is inclusive
  }

// Numero casuale della CPU usando la funzionne getRandomInt
const userCPU = getRandomInt(1, 6);
console.log("Numero casuale della CPU: " + userCPU);

