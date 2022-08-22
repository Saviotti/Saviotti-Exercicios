let numDiv = 0;

for(let i = 2; i < 150; i += 1) {
    if(i % 3 == 0) {
        numDiv += 1
    }
}
    if (numDiv == 50) {
        console.log ("Mensagem secreta")
    } else {
        console.log (numDiv)
    }