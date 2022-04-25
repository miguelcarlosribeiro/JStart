console.log(`Trabalhando com listas`);

const lista_de_destinos = new Array(`Salvador`, `Sao Paulo`, `Rio de janeiro`);

lista_de_destinos.push(`Curitiba`);
console.log(lista_de_destinos);

lista_de_destinos.splice(1, 1);
console.log(lista_de_destinos);

console.log(lista_de_destinos[1]);
