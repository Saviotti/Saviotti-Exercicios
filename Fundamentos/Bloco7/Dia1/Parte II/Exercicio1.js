const factorial = (number) => {
  let result = 1;

  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }
  return result;
};
const print = factorial(number);
console.log(`Esse é o fatorial ${print}`);