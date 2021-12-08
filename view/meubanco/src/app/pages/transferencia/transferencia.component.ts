import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ITransferencia } from 'src/app/interfaces/transferencia';
@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})



export class TransferenciaComponent implements OnInit {

  constructor(private contasService: ContasService, private router: Router) { }

  ngOnInit(): void {
  }

formGroup: FormGroup = new FormGroup({
  agenciaDestino: new FormControl('', Validators.required),
  agenciaOrigem: new FormControl('', Validators.required),
  numeroContaDestino: new FormControl('', Validators.required),
  numeroContaOrigem: new FormControl('', Validators.required),
  valor: new FormControl(null, Validators.required)
});



transferencia() {
  const transferencia: ITransferencia = this.formGroup.value;
  this.contasService.transferencia(transferencia).subscribe(clienteApi =>{
    Swal.fire("Transação realizada!", "Transferência realizada com sucesso!","success")
    console.log(clienteApi)
    this.router.navigate(['/contas'])
  },error =>{
    console.log(error)
  })




  }
}
