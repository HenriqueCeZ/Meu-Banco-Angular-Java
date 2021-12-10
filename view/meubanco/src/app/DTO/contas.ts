import { Cliente } from "./cliente";

export class Contas {

  id!: number;
  agencia!: string;
  numero!: string;
  saldo!: number;
  cliente!: Cliente;

  constructor(obj?: { agencia: any; numero: any; saldo: any; cliente?: { id: number; nome: string; cpf: string; email: string; ativo: boolean; observacoes: string; } | undefined; id?: any; }) {
      if (obj) {
          this.id = obj.id;
          this.agencia = obj.agencia;
          this.numero = obj.numero;
          this.saldo = obj.saldo;
          this.cliente = new Cliente(obj.cliente);

      }

  }
}
