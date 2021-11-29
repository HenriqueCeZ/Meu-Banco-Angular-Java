import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClientesService } from '../clientes.services';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClientesComponent implements OnInit {

  cliente = this.clienteService.getClient();

  checkoutForm = this.formBuilder.group({
    nome: '',
    cpf: '',
    observacoes: '',
    status: true
  });

  constructor(
    private clienteService: ClientesService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    alert("Cliente cadastrado com os dados:"+this.clienteService.getClient())
    this.checkoutForm.reset();
  }


}
