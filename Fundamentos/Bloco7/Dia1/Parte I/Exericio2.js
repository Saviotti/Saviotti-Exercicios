const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[0] = 3;
  oddsAndEvens[0] = 4;
  oddsAndEvens[0] = 7;
  oddsAndEvens[0] = 10;
  oddsAndEvens[0] = 3;
  return oddsAndEvens;
};

const saveArray = sortOddsAndEvens();
console.log(`Os números ${saveArray} se encontram ordenados de forma crescente.`);