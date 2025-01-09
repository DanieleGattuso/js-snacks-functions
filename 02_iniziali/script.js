/* Scrivi una funzione che accetti un array di nomi e restituisca un nuovo  array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.


function getInitials(array) {
    
    const initials = [];
    
    let primaLettera = 0;
   
    for (let i = 0; i < array.length; i++) {
        
        primaLettera = array[i].charAt(0).toUpperCase();
       
        initials.push(primaLettera);
    }
    
   
    return initials;
}



// Invoca la funzione qui e stampa il risultato in console
const initials = getInitials(names);

// Stampiamo il risultato
console.log(initials); // Output: ["A", "L", "M", "A", "G", "A"]