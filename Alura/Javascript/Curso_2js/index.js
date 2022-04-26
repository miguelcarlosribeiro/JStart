import { Cliente } from "./Cliente.js";
import { Conta_corrente } from "./Conta_corrente.js";


const cliente1 = new Cliente();
cliente1.nome = "Miguel";
cliente1.cpf = "11122233399";

const cliente2 = new Cliente();
cliente2.nome = "arthur";
cliente2.cpf = "22233344455";

const conta_corrente_miguel = new Conta_corrente();
conta_corrente_miguel.agencia = 1001;
conta_corrente_miguel.cliente = cliente1;
conta_corrente_miguel.depositar(500);


const conta2 = new Conta_corrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

conta_corrente_miguel.transferir(200, conta2);

console.log(conta_corrente_miguel);
console.log(conta2);
