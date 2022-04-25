console.log(`Trabalhando com condicionais`);

const lista_de_destinos = new Array(`Salvador`, `Sao Paulo`, `Rio de janeiro`);
console.log(lista_de_destinos);

const idade_comprador = 15;
const esta_acompanhado = false;
const passagem_comprada = true;
console.log("Destinos possiveis:");

if (idade_comprador >= 18 || esta_acompanhado) {
  console.log("Venda realizada");
  console.log("Você ira viajar para " + lista_de_destinos[1] + " Boa viajem");

  lista_de_destinos.splice(1, 1);
} else {
  console.log(
    "Comprador menor de idade ou não está acompanhado, não posso vender"
  );
}
console.log("Desitinos Restantes: ");
console.log(lista_de_destinos);

console.log("Embarque: \n ");
if (passagem_comprada && (idade_comprador >= 18 || esta_acompanhado)) {
  console.log("Pode embarcar, Boa viajem");
} else {
  console.log("Infelizmente não atende os requisitos");
}
