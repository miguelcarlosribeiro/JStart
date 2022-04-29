import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class Conta_corrente extends Conta{
  static numero_de_contas = 0;

  constructor(cliente, agencia) {
    super(0, cliente, agencia);
    Conta_corrente.numero_de_contas += 1;
  }
}
