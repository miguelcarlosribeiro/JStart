import { Cliente } from "./Cliente.js";

export class Conta_corrente {
  
  static numero_de_contas = 0;
  agencia;
  _cliente;
  _saldo = 0;

  set cliente(novo_valor) {
    if (novo_valor instanceof Cliente) {
      this._cliente = novo_valor;
    }
  }



  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

constructor(agencia, cliente){
    this.agencia = agencia;
    this.cliente = cliente;
    Conta_corrente.numero_de_contas +=  1;
}

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if (valor <= 0) return;

    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valor_sacado = this.sacar(valor);
    conta.depositar(valor_sacado);
  }
}
