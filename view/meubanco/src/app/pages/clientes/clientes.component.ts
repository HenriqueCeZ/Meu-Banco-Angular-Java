import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: ICliente[] = []

  constructor(private clientService: ClientService) {


   }

  ngOnInit(): void {
      this.listarTodosClientes()

  }

  listarTodosClientes(){
    this.clientService.listarTodosClientes().subscribe(clientesApi =>{
      this.clientes =  clientesApi
    })
  }


  confirmar(id: number) {
    Swal.fire({
      title: 'Você quer deletar?',
      text: "Isso não vai voltar mais nunca, quer mesmo?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Vai logo'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientService.remover(id).subscribe(result => {
          Swal.fire(
            'Removido!',
            'Seu cliente foi removido com sucesso!',
            'success'
          );
          this.listarTodosClientes();
        }, error => {
          console.error(error);
        });
      }
    })
  }
}

