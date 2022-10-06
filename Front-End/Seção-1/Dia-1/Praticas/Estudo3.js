// pushNumberAsync.js

const pushNumber = (list, number) => list.push(number);

const numbers = [];

const THREE_SECONDS = 3000;

setTimeout(() => pushNumber(numbers, 1), THREE_SECONDS);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

// console.log(numbers);

setTimeout(() => console.log(numbers), THREE_SECONDS);

// Saída:
// [2, 3] com o c.log (numbers)

// Saída:
// [ 2, 3, 1 ] com o setTimeout em numbers