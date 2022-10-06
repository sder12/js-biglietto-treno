//INSTRUCTION
/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

//INPUT
//chiedere all'utente km ed età NB convertire in NUMERO
const userAge = parseInt(prompt("Quanti anni hai?"));
const userKm = parseInt(prompt("Quanti km devi percorrere?"))

console.log(userAge, typeof(userAge));
console.log(userKm, typeof(userKm));

//generare il prezzo intero del biglietto (0.21 € al km)
const fullCost = userKm * 0.21;
console.log(fullCost, typeof(fullCost));

// SE età < 18 applico sconto del 20%
//ALTRIMNETI SE età >= 65 applico sconto del 40%
// ALTRIMENTI non ci sarà nessuno sconto per età compresa tra 18 e 85
const discount20 = (fullCost * 20) / 100;
const discount40  = (fullCost * 40) / 100;
console.log(discount20, discount40)

const youngCost = fullCost - discount20;
const oldCost = fullCost - discount40;
console.log(youngCost, oldCost)

//OUTPUT
// arrotondo tutti i prezzi ai centesimi 0.00
// alert Messaggio: Salve cliente,il prezzo del tuo biglietto é...
const message ="Il prezzo del tuo biglietto è di "
if (userAge < 18){
    alert(message + youngCost)
} else if (userAge >= 65){
    alert(message + oldCost)
} else{
    alert(message + fullCost)
}
