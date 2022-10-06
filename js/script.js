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


//PROCESSING
//generare il prezzo intero del biglietto (0.21 € al km)
// SE età < 18 applico sconto del 20%
//ALTRIMNETI SE età >= 65 applico sconto del 40%
// ALTRIMENTI non ci sarà nessuno sconto per età compresa tra 18 e 85

//OUTPUT
// arrotondo tutti i prezzi ai centesimi 0.00
// alert Messaggio: Salve cliente,il prezzo del tuo biglietto é...