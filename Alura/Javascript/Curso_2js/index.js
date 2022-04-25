class cliente {
  nome;
  cpf;
  agencia;
  saldo;
  
}

const cliente1 = new cliente();
const cliente2 = new cliente();

cliente1.nome = "Miguel";
cliente1.cpf = "11122233399";
cliente1.agencia = "1001";
cliente1.saldo = 0;




cliente2.nome = "arthur";
cliente2.cpf = "22233344455";
cliente2.agencia = "1001";
cliente2.saldo = 0;

console.log(cliente1, cliente2);
