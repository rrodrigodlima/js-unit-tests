const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
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

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  const product1 = 'Alcool';
  const product2 = 'Mascara';
  const details = productDetails(product1, product2);
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('Teste se o retorno da função é um array.', () => {
    expect(Array.isArray(productDetails())).toBe(true);
    expect(Array.isArray(details)).toBe(true);
  });
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    expect(productDetails()).toHaveLength(2);
    expect(details).toHaveLength(2);
  });
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    expect(productDetails()[0]).toMatchObject({});
    expect(productDetails()[1]).toMatchObject({});
    expect(details[0]).toMatchObject({});
    expect(details[1]).toMatchObject({});
  });
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    expect(details[0]).not.toEqual(details[1]);
  });
  it('Teste se os dois productIds terminam com 123.', () => {
    expect(details).toEqual(expect.arrayContaining([
      expect.objectContaining({details: {productId: product1+'123'}}),
      expect.objectContaining({details: {productId: product2+'123'}}),
    ]))
  });
});
