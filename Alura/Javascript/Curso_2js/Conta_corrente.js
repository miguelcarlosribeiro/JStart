export class Conta_corrente {
    agencia;
    cliente;



    _saldo = 0;
  
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