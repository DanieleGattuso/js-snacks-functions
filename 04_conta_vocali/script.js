

/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

let vowels = word.split("")



function quantitaVocali(lettere) {
    
    let vocali = ["a","e","i","o","u"];
    let numeroVocali = []
    for(let i=0; i<word.length ; i++){

        
        for(let j=0; j<vocali.length; j++){

            if(lettere[i] === vocali[j]){

                numeroVocali.push(lettere[i])
            }
        }
    }


    return numeroVocali
    
}

let anfora = quantitaVocali(vowels)
console.log(anfora.length ,anfora);




// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)