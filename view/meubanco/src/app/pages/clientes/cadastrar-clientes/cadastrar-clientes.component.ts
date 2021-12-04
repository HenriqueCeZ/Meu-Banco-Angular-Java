import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Cliente } from '../clientes';


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

  onSubmit(f: NgForm): void {
    if(this.cliente.ativo && this.cliente.nome && this.cliente.cpf){
      alert(`Nome: ${this.cliente.nome}\nCPF: ${this.cliente.cpf}\nObservações: ${this.cliente.observacoes}\nStatus: ${this.cliente.ativo}`)
      f.resetForm()

    }else{
      alert("Preencha os campos obrigatórios")
    }

  }


}
