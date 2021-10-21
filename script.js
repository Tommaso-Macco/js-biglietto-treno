// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// Chiedere quanti km vuole percorrere
let kmUtente = parseInt(prompt("quanti km vuoi percorrere?"));
console.log(kmUtente);

// chiedere quanti anni ha
let anniUtente = parseInt(prompt("quanti anni hai?"));
console.log(anniUtente);



// calcolare prezzo al km
let prezzoBase = parseInt(Math.floor(kmUtente * 0.21));
console.log(prezzoBase);


// formula per lo sconto

let sconto; 
    if (anniUtente < 19) {
       sconto = (prezzoBase / 100) * 20;
}
    else if (anniUtente > 64) {
       sconto = (prezzoBase / 100) * 40;
}
    else
        sconto = 0
console.log(sconto);


// CALCOLO SCONTO

let prezzoFinale = prezzoBase - sconto;

console.log("prezzo finale scontato", prezzoFinale);


// mettere tutto a schermo
document.getElementById("prezzo").innerHTML = prezzoFinale, "€"
