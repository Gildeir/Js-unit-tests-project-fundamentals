/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

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

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#productDetails', () => {
  it('tests the function has the correct behaviour', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    const productDts = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(Array.isArray(productDts), true);
    // Teste que o retorno da função é um array.
    assert.strictEqual(productDts.length, 2);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(typeof (productDts[0]), 'object');
    assert.strictEqual(typeof (productDts[1]), 'object');
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDts[0], productDts[1]);
    // (Difícil) Teste que os dois productIds terminam com 123.
    assert.strictEqual(productDts[0].details.productId.endsWith(123), true);
    assert.strictEqual(productDts[1].details.productId.endsWith(123), true);
  });
});
