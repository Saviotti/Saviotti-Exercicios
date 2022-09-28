// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Mexirica', 'Manga', 'Banana maça'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado', 'Aveia', 'Mel'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));