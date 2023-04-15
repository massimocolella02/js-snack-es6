let biciclette = [
    {
        nome: 'Marzano',
        peso: 12,
    },
    {
        nome: 'Marzano1',
        peso: 13,
    },
    {
        nome: 'Marzano2',
        peso: 14,
    },
    {
        nome: 'Marzano3',
        peso: 23,
    },
    {
        nome: 'Mountain-Bike',
        peso: 20,
    }
];

//Array dei vari pesi
let arrayPeso = [];

for(let i = 0; i < biciclette.length; i++){
    arrayPeso.push(biciclette[i].peso)

    //Numero più piccolo fra i pesi
    let min = Math.min.apply(Math, arrayPeso);

    if(arrayPeso[i] === min){
        console.log(biciclette[i].nome)
    }
}