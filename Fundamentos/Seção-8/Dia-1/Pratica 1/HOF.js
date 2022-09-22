// Ao chamar a função doingThings:


// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const wakeUp = () => 'Acordando!';
const breakfest = () => 'Bora tomar café';
const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => {
    const result = callback();
    console.log(result);
};
doingThings(wakeUp);
doingThings(breakfest);
doingThings(sleep);