// L'utente sceglie se vuole pari o dispari
let choice = prompt("Scrivi la tua scelta: 'pari' o 'dispari'");
while ((choice != "pari") && (choice != "dispari")){
    choice = prompt("Scrivi 'pari' o 'dispari'");
}

console.log("Hai scelto: " + choice);

// L'utente inserisce un numero da 1 a 5
let userNumber = parseInt( prompt("Inserisci un numero da 1 a 5"));
while ((userNumber < 1 ) || (userNumber > 5)){
    userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
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

// Faccio la somma dei due valori numerici di user e CPU
let sum = userCPU + userNumber;
console.log("La somma dei due numeri è: " + sum);

// Creo una funzione per determinare se la somma è pari o dispari
function isEven(value) {
	if (value%2 == 0)
		return result = "pari";
	else
		return result = "dispari";
}

// Visualizzo il risultato della funzione
let result = "";
isEven(sum);
console.log("La somma dei numeri è: " + result);

// Condizione per calcolare se l'utente ha vinto o ha perso
if (result == choice){
    console.log("HAI VINTO!");
} else{
    console.log("Mi dispiace, hai perso.");
}

