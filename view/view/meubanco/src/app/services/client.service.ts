import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICliente } from '../interfaces/cliente';
import { Cliente } from '../DTO/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  api = `${environment.api}/clientes/`
  constructor(private http: HttpClient) {

   }

  listarTodosClientes(){
      return this.http.get<ICliente[]>(this.api)
  }

  cadastrar(cliente: ICliente){

    return this.http.post<ICliente>(this.api,cliente)

  }
  atualizar( cliente: Cliente) {
    return this.http.put<Cliente>(`${this.api}${cliente.id}`,cliente);
  }

  getClientById(id: number) :Observable<Cliente>{
    return this.http.get<any>(`${this.api}${id}`)
  }


  remover(id: number)  {
    return this.http.delete<any>(`${this.api}${id}`)
  }





}
