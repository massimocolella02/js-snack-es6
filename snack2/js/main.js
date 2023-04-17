let squadre = [
    {
        nome: 'Napoli',
        punti: puntiRandom(),
        falli_subiti: puntiRandom()
    },
    {
        nome: 'Roma',
        punti: puntiRandom(),
        falli_subiti: puntiRandom()
    },
    {
        nome: 'Lazio',
        punti: puntiRandom(),
        falli_subiti: puntiRandom()
    },
    {
        nome: 'Milan',
        punti: puntiRandom(),
        falli_subiti: puntiRandom()
    },
    {
        nome: 'Juventus',
        punti: puntiRandom(),
        falli_subiti: puntiRandom()
    },
    {
        nome: 'Fiorentina',
        punti: puntiRandom(),
        falli_subiti: puntiRandom()
    },
    {
        nome: 'Lecce',
        punti: puntiRandom(),
        falli_subiti: puntiRandom()
    }
]


for(let i=0; i < squadre.length; i++){
    let {nome , falli_subiti} = squadre;
    console.log(squadre[i].nome, squadre[i].falli_subiti)
}







function puntiRandom(){
    return Math.floor(Math.random() * 100) + 1;
}