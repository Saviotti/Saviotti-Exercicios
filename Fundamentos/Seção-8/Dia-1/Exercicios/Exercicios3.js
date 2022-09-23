const arrayOfValues = ['Jose', 50, 0.25, {comida: 'chocolate'}];

arrayOfValues.forEach((element, posição, lista) => {
    console.log('Cada elemento da lista:', element);
    console.log('Index, posição do elemento:', posição);
    console.log('Array percorrido:', lista);
});
