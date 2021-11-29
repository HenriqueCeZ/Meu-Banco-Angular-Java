import { Injectable } from '@angular/core';
import { Cliente } from './clientes';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getClient() : Cliente{
    let  cliente: Cliente = new Cliente();
    cliente.nome = '';
    cliente.cpf = "";
    cliente.observacoes = ""
    cliente.ativo = false;
    return cliente;
  }
  setClient() : Cliente{
    let  cliente: Cliente = new Cliente();
    cliente.nome = ""
    cliente.cpf = "";
    cliente.observacoes = ""
    cliente.ativo = false;
    return cliente;
  }
}
