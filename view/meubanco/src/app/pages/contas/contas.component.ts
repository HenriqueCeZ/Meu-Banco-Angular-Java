import { Component, OnInit } from '@angular/core';
import { IContas } from 'src/app/interfaces/contas';
import { ContasService } from 'src/app/services/contas.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {
  contas: IContas[] = []
  constructor(private contasService: ContasService) { }

  ngOnInit(): void {
    this.listarTodasContas()
  }
  listarTodasContas(){
  this.contasService.listarTodasConta().subscribe(contasApi =>{
    this.contas =  contasApi
  })
  }
}
