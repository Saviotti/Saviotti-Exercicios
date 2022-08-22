let pessoa1 = "Tesoura";
let pessoa2 = "Papel";

if (pessoa1 == "Pedra" && pessoa2 == "Tesoura" || pessoa1 == "Tesoura" && pessoa2 == "Papel"
   || pessoa1 == "Papel" && pessoa2 == "Pedra") {
    console.log("Pessoa1 é o vencedor.")
}
else if(pessoa1 == "Pedra" && pessoa2 == "Pedra" || pessoa1 == "Papel" && pessoa2 == "Papel" 
        || pessoa1 == "Tesoura" && pessoa2 == "Tesoura") {
            console.log("É um empate");
        } else {
            console.log("Pessoa2 é o vencedor.")
        }


