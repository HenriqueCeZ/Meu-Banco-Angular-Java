import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { IContas } from 'src/app/interfaces/contas';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cadastrar-contas',
  templateUrl: './cadastrar-contas.component.html',
  styleUrls: ['./cadastrar-contas.component.css']
})
export class CadastrarContasComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    saldo: new FormControl(0, Validators.required),
    cliente: new FormGroup({
      nome: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      cpf: new FormControl('',[Validators.required, Validators.maxLength(11), Validators.minLength(1)]),
      observacoes: new FormControl('',),
      ativo: new FormControl(true),
    }),
  });
  errors: any;

  constructor(private contasService: ContasService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const contas: IContas = this.formGroup.value
    this.contasService.cadastrar(contas).subscribe(clienteApi =>{
      Swal.fire("Cadastro realizado!", "nova conta criada!","success")
      console.log(clienteApi)
      this.router.navigate(['/contas'])
    },error =>{
      console.log(error)
    })
    this.formGroup.reset()


 }

}



