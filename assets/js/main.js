/* Il programma dovrà chiedere all'utente:

-il numero di chilometri che vuole percorrere
-l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.

*/
// Chiedere nome del passeggero
const userName = document.getElementById('name');
// console.log('nome utente', document.getElementById('name').value);

// Chiedere numero di chilometri che vuole percorrere
const kilometres = document.getElementById('km');

// Chiedere l'età del passeggero
const userAge = document.getElementById('age');

// Calcolare il prezzo totale del viaggio
const priceOfKilometer = 0.21;

const ticketPrice = kilometres * 0.21;
const finalPrice = ticketPrice

// Applicare uno sconto del 20% per i minorenni
const percentageUnder18= 20;

const discountValue18 = (ticketPrice / 100) * percentageUnder18; 

const finalPrice18 = ticketPrice - discountValue18.toFixed(2);


// Applicare uno sconto del 40% per gli over 65
const percentageOver65= 40;

const discountValue65 = (ticketPrice / 100) * percentageOver65; 

const finalPrice65 = ticketPrice - discountValue65.toFixed(2);

// Genera biglietto

const buttonGenerator = document.getElementById('genera');


buttonGenerator.addEventListener('click', function(){
    const userName = document.getElementById('name');
    console.log(userName.value);
        
})


// if (userAge < 18) {
//     document.getElementById('price').innerHTML = `From ${departure} to ${destination} the price is: ${finalPrice18} $`;
// } else if (userAge > 65) {
//     document.getElementById('price').innerHTML = `From ${departure} to ${destination} the price is: ${finalPrice65} $`;
// } else {
//     document.getElementById('price').innerHTML = `From ${departure} to ${destination} the price is: ${finalPrice} $`;
// }



