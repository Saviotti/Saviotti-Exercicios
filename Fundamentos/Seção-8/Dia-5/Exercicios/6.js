const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const total = [...palio, ...shelbyCobra, ...chiron];
// console.log(total);

// PASSAR DE ARRAY PARA OBJETO:
 const toObject = ([nome, empresa, ano]) => ({nome, empresa, ano});

 console.log(toObject(palio));
 console.log(toObject(shelbyCobra));
 console.log(toObject(chiron));
//  console.log(toObject(total)); --- VER PQ NÃO DA CERTO ---
