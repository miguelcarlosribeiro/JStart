import { Conta } from "./Conta.js";

export class Conta_poupanca extends Conta{
    constructor(saldo_inicial, cliente, agencia){
        super(saldo_inicial, cliente, agencia);
    }
}