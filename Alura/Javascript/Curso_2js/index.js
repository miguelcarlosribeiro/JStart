import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";
import { Conta_corrente } from "./Conta_corrente.js";
import { Conta_poupanca } from "./Conta_poupanca.js";

const cliente1 = new Cliente("Miguel", 11122233399);

const conta_corrente_miguel = new Conta_corrente(cliente1, 1001);
conta_corrente_miguel.depositar(500);
conta_corrente_miguel.sacar(100);

const conta_poupanca = new Conta_poupanca(50, cliente1, 1001);

console.log(conta_poupanca);
console.log(conta_corrente_miguel);

// Undefined e null
//Undefined é diferente de null
// null proposital
//undefined pode ter esquecido de inserir o dado
