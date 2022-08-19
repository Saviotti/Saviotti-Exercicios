let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for(let index = 0; index < numbers.length; index += 1) {
    var numero = numbers[index];

    if (numero > maiorNumero) {
        maiorNumero = numero;
    }
}
console.log(maiorNumero);