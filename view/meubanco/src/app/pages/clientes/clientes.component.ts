import { Component, OnInit } from '@angular/core';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClientService } from 'src/app/services/client.service';

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

}
