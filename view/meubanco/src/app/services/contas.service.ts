import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IContas } from '../interfaces/contas';
import { ISaqueDeposito } from '../interfaces/saqueDeposito';
import { ITransferencia } from '../interfaces/transferencia';
import { Contas } from '../pages/contas/contas';

@Injectable({
  providedIn: 'root'
})


export class ContasService {

  api = `${environment.api}/contas/`
  constructor(private http: HttpClient) { }



  listarTodasConta(){
    return this.http.get<IContas[]>(this.api)

  }
  create(obj: Contas){
    return this.http.post<Contas>(this.api, obj);
}


  saque(saque: ISaqueDeposito){
    return this.http.post<IContas>(`${this.api}saque`,saque);
  }

  deposito(deposito: ISaqueDeposito) {
    return this.http.post<IContas>(`${this.api}deposito`, deposito);
  }

  transferencia(deposito: ITransferencia) {
    return this.http.post<IContas>(`${this.api}transferencia`, deposito);
  }


  remover(id: number)  {
    return this.http.delete<any>(`${this.api}${id}`)
  }

  atualizar(conta: Contas) {
    return this.http.put(`${this.api}/${conta.id}/`, conta);
}


getClientById(id: number) {
  return this.http.get<any>(`${this.api}${id}`)
}
}
