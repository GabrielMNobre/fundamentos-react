function GeraArray(qtd) {
  const array = [];
  for (let i = 0; i < qtd; i += 1) {
    let numero = Math.ceil((Math.random() * (98)) + 1);
    while (array.indexOf(numero) >= 0) {
      numero = Math.ceil((Math.random() * (98)) + 1);
    }

    array.push(numero);
  }
  return array;
}

export default GeraArray;
