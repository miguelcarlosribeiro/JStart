export class Conta {
  constructor(saldo_inicial, cliente, agencia) {
    this._saldo = saldo_inicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

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

  sacar(valor) {
    let taxa = 1;

    const valor_sacado = taxa * valor;
    if (this._saldo >= valor_sacado) {
      this._saldo -= valor_sacado;
      return valor_sacado;
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
