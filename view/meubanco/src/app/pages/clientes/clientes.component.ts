import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';
import * as _ from 'lodash';
import 'lodash';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: ICliente[] = []

  constructor(private clienteService: ClientService) {


   }

  ngOnInit(): void {
      this.listarTodosClientes()

  }

  listarTodosClientes(){
    this.clienteService.listarTodosClientes().subscribe(clientesApi =>{
      this.clientes =  clientesApi
    })
  }


  deletar(id: number) {
    Swal.fire({
      title: 'Você tem certeza que deseja deletar?',
      text: "Não tem como reverter essa ação",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'grey',
      confirmButtonText: 'Deletar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.remover(id).subscribe(clientesApi => {
          Swal.fire(
            'Deletado',
            'Cliente deletado com sucesso',
            'success'
          );
          this.listarTodosClientes()

        }, error => {
          let erro = _.get(error, 'error.detalhes')
          Swal.fire({
            icon: 'error',
            title: 'Erro ao atualizar',
            text: `${erro}`
          })

        })

      }
    })
  }

}






