import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ISaqueDeposito } from 'src/app/interfaces/saqueDeposito';
import * as _ from 'lodash';
import 'lodash';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  constructor(private contasService: ContasService, private router: Router) { }

  ngOnInit(): void {
  }

  formGroup: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl(null, Validators.required),
  });

  sacar() {
    const saque: ISaqueDeposito = this.formGroup.value;
    this.contasService.saque(saque).subscribe(clienteApi =>{
      Swal.fire("Transação realizada!", "Saque realizado com sucesso!","success")
      this.router.navigate(['/contas'])
    },error =>{
     let erro = _.get(error, 'error.detalhes')
      Swal.fire({
        icon: 'error',
        title: 'Erro na Operação',
        text: `${erro}`,

      })
    })




}
}
