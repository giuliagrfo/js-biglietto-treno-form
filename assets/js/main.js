/* Il programma dovrà chiedere all'utente:

-il numero di chilometri che vuole percorrere
-l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
-il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.

*/
// Chiedere nome del passeggero
const userName = document.getElementById('name').value;

// Chiedere numero di chilometri che vuole percorrere
const kilometres = document.getElementById('km').value;

// Chiedere l'età del passeggero
const userAge = document.getElementById('age').value;




// Genera biglietto

const buttonGenerator = document.getElementById('genera');


buttonGenerator.addEventListener('click', function(){
    const userName = document.getElementById('name').value;
    // console.log(userName.value);
    document.getElementById('nome_utente').innerHTML = `${userName}`
    
    // Calcolare il prezzo totale del viaggio
    const kilometres = document.getElementById('km').value;

    const priceOfKilometer = 0.21;
    
    const ticketPrice = kilometres * priceOfKilometer;
    
    // Applicare uno sconto del 20% per i minorenni
    const percentageUnder18= 20;
    
    const discountValue18 = (ticketPrice / 100) * percentageUnder18; 
    
    const finalPrice18 = ticketPrice - discountValue18.toFixed(2);
    
    
    // Applicare uno sconto del 40% per gli over 65
    const percentageOver65= 40;
    
    const discountValue65 = (ticketPrice / 100) * percentageOver65; 
    
    const finalPrice65 = ticketPrice - discountValue65.toFixed(2);
    const userAge = document.getElementById('age').value;
    
    
    if (userAge < 18) {
        document.getElementById('price').innerHTML = `${finalPrice18} &euro;`;
    } else if (userAge > 65) {
        document.getElementById('price').innerHTML = `${finalPrice65} &euro`;
    } else {
        document.getElementById('price').innerHTML = `${ticketPrice} &euro`;
    }
    
    
})






