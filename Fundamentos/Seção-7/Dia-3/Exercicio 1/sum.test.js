const sum = require('./sum.js');

describe('testando a função sum', () => {
  it('retorna o resultado da soma',() => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('dispara erro se receber string como parâmetro', () => {
    expect(() => sum (4, '5')).toThrowError();
    expect(() => sum (4, '5')).toThrowError('parameters must be numbers');
  })
})
