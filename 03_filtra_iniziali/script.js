/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

let lettera = "A"

function equalLetter(array, letter) {
    
    const firstLetter = []

    

    for (let i=0; i<array.length; i++){

        primaLettera = array[i].charAt(0).toUpperCase();

        if(primaLettera === letter){
            
            firstLetter.push(array[i]);
        }
    }
    return firstLetter
}

console.log(equalLetter(names, lettera));


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]