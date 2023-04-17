const arraynumeri = ['Massimo','Francesca','Giuseppe','Vittoria','Manuela','Riccardo', 'Gianmarco']

let primo_estremo = parseInt(prompt(`Inserisci un numero da 0 a ${arraynumeri.length - 1}`));
let secondo_estremo = parseInt(prompt(`Inserisci un numero da 0 a ${arraynumeri.length - 1}`));
let risultato = [];

for( let i= primo_estremo + 1; i < secondo_estremo; i++){
    risultato.push(arraynumeri[i])
}

console.log(risultato)
