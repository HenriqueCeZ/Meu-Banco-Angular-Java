import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IContas } from '../interfaces/contas';

@Injectable({
  providedIn: 'root'
})


export class ContasService {
  api = `${environment.api}/contas/`
  constructor(private http: HttpClient) { }



  listarTodasConta(){
    return this.http.get<IContas[]>(this.api)
}
}
