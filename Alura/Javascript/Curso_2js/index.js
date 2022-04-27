import { Cliente } from "./Cliente.js";
import { Conta_corrente } from "./Conta_corrente.js";

const cliente1 = new Cliente("Miguel", 11122233399);

const cliente2 = new Cliente("arthur", 22233344455);

const conta_corrente_miguel = new Conta_corrente(1001, cliente1);

conta_corrente_miguel.depositar(500);

const conta2 = new Conta_corrente(102, cliente2);

let valor = 200;

conta_corrente_miguel.transferir(valor, conta2);

console.log("Valor: ", valor);
console.log(cliente1);

console.log(conta_corrente_miguel);
console.log(Conta_corrente.numero_de_contas);

// Undefined e null
//Undefined é diferente de null
// null proposital
//undefined pode ter esquecido de inserir o dado
