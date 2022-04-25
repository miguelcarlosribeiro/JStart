console.log(`\n Trabalhando com loops`);

console.log("\nDestinos possiveis:");

const lista_de_destinos = new Array(`Salvador`, `Sao Paulo`, `Rio de janeiro`);
console.log(lista_de_destinos);

const idade_comprador = 15;
const esta_acompanhado = false;
let passagem_comprada = false;
const destino = "Santos";

const pode_comprar = idade_comprador >= 18 || esta_acompanhado;

let contador = 0;
let destino_existente = false;
while (contador < lista_de_destinos.length) {
  if (destino == lista_de_destinos[contador]) {
    console.log(lista_de_destinos[contador] + " disponivel para compra");
    destino_existente = true;
    break;
  }
  contador++;
}

if (pode_comprar && destino_existente) {
  console.log("Venda realizada");
  console.log("Você ira viajar para " + lista_de_destinos[1] + " Boa viajem");
  passagem_comprada = true;
  lista_de_destinos.splice(1, 1);
} else if (destino_existente == false) {
  console.log(
    "Infelizmente o destino não existe entre nosso destinos disponiveis"
  );
} else {
  console.log(
    "\nComprador menor de idade ou não está acompanhado, não posso vender"
  );
  passagem_comprada = false;
}

console.log("\nDesitinos Restantes: \n");
console.log(lista_de_destinos);

console.log("\nEmbarque:  ");
if (passagem_comprada && pode_comprar) {
  console.log("Pode embarcar, Boa viajem\n");
} else {
  console.log("Infelizmente não atende os requisitos\n");
}
