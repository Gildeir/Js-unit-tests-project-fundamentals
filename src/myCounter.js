/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  var myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (let counter1 = 2; counter1 <= 3; counter1 += 1) {
      myArray.push(counter1);
    }
  }
  return myArray;
};

module.exports = myCounter;
