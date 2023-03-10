// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// Il prezzo del biglietto è definito in base ai km(0.21 € al km).
// Va applicato uno sconto del 20 % per i minorenni.
// Va applicato uno sconto del 40 % per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//RICHIESTA KM
const userDistance = prompt('Quanti km vuoi percorrere?');
console.log('Distanza ', userDistance);

//RICHIESTA ETA'
const userAge = prompt('Quanti anni hai?');
console.log('Età ', userAge);

//calcolo prezzo in base ai km
const priceBase = 0.21 * userDistance;
console.log('Prezzo biglietto ', priceBase);

//ticket in base all'età
if (userAge < 18) {
    ticket_1 = ((priceBase * 80) / 100);
    console.log('Prezzo biglietto finale ', ticket_1.toFixed(2));
} else if (18 < userAge < 65) {
    ticket_1 = priceBase;
    console.log('Prezzo biglietto finale ', ticket_1.toFixed(2));
} else if (userAge > 65) {
    ticket_1 = ((priceBase * 60) / 100);
    console.log('Prezzo biglietto finale ', ticket_1.toFixed(2));
}

//final ticket
document.getElementById('prezzo_biglietto_finale').innerHTML = 'Il prezzo del biglietto sarà di € ', ticket_1;