/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.
  Atenção: não remova os `for`s da função e sim corrija os erros presentes.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  let myArray = [];
  for (let i = 0; i <= 3; i += 1) {
    myArray.push(i);
    for (let k = 2; k <= 3; k += 1) {
      myArray.push(k);
    }
  }
  return myArray;
}; // Tava var, o q estava fazendo o lop parar no primeiro loop, pois depois do segundo for o counter era igual a 3. Dai coloquei o let para n transbordar mais.

module.exports = myCounter;
