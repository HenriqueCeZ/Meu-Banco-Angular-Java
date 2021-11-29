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

  checkoutForm = this.formBuilder.group({

  });

  constructor(private formBuilder: FormBuilder, private clienteService: ClientesService) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    alert("Cliente com nome: "+this.cliente.nome+"Cliente com cpf: "+this.cliente.cpf+"Cliente observações: "+this.cliente.observacoes+"Cliente com status: "+this.cliente.ativo)
    this.checkoutForm.reset();
  }


}
