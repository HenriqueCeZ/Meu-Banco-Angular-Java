import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Cliente } from '../clientes';
import { ClientesService } from '../clientes.services';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClientesComponent implements OnInit {

  cliente!: Cliente ;

  constructor() {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }


  onSubmit(): void {

    alert("nome: "+this.cliente.nome+"cpf: "+this.cliente.cpf+"observações: "+this.cliente.observacoes+"Active: "+this.cliente.ativo)

  }


}
