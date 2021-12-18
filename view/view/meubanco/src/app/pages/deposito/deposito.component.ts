import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ISaqueDeposito } from 'src/app/interfaces/saqueDeposito';
import * as _ from 'lodash';
import 'lodash';
@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('', Validators.required),
    valor: new FormControl(null, Validators.required),
  });



  constructor(private contasService: ContasService, private router: Router ) {

   }

  ngOnInit(): void {
  }


  depositar() {
    const deposito : ISaqueDeposito = this.formGroup.value
    this.contasService.deposito(deposito).subscribe(clienteApi =>{
      Swal.fire("Transação realizada!", "Deposito realizado com sucesso!","success")
      console.log(clienteApi)
      this.router.navigate(['/contas'])
    },error =>{
      let erro = _.get(error, 'error.detalhes')
      Swal.fire({
        icon: 'error',
        title: 'Erro na Operação',
        text: `${erro}`,
      })
    })
    this.formGroup.reset()


}

  }




