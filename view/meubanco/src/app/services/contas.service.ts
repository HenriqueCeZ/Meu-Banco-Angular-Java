import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IContas } from '../interfaces/contas';
import { ISaqueDeposito } from '../interfaces/saqueDeposito';
import { ITransferencia } from '../interfaces/transferencia';

@Injectable({
  providedIn: 'root'
})


export class ContasService {
  api = `${environment.api}/contas/`
  constructor(private http: HttpClient) { }



  listarTodasConta(){
    return this.http.get<IContas[]>(this.api)

  }

  cadastrar(conta: IContas){

    return this.http.post<IContas>(this.api,conta)

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




}
