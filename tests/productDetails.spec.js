const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const arr = productDetails();
    const items = productDetails('Alcool gel', 'Máscara');
    const alcool = arr[0].details.productId.endsWith('123');
    const mask = arr[1].details.productId.endsWith('123');
    expect(typeof productDetails).toBe('function');
    expect(typeof productDetails()).toBe('object');
    expect(arr.length).toEqual(2);
    expect(typeof arr[0] && typeof arr[1]).toBe('object');
    assert.notDeepStrictEqual(items[0], items[1]);
    expect(alcool && mask).toBe(true);
  });
});
