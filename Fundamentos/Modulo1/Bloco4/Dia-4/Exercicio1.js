let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
    info2: {
        personagem: 'Tio Patinhas',
        origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
        nota: 'O último MacPatinhas',
        recorrente: 'Sim'
    },
  };

//   console.log('Bem vinda, ' + info.personagem);


//   ----------3-----------
// for(let index in info) {
//     console.log(index);
// }

// ---------4---------
// for(let index in info) {
//     console.log(info[index]);
// }

// ---------5--------
for(let index in info2) {
    console.log(info2[index]);
}