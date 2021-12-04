import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.css']
})
export class CadastrarClientesComponent implements OnInit {

  myForm!: FormGroup;

  success!: Boolean;

  cpfInvalido!: Boolean

  nomeInvalido!: Boolean

  constructor(form: FormBuilder, private clientService: ClientService, private router: Router ) {

    this.myForm = form.group({
      nome: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required, Validators.email]),
      cpf: new FormControl('',[Validators.required, Validators.maxLength(11), Validators.minLength(11)]),
      observacoes: new FormControl('',),
      ativo: new FormControl(true),
    });

  }

  ngOnInit(): void {

  }


  convertCpf(){
    if(this.myForm){
     let convert = this.myForm?.get('cpf')?.value.replace(/\.|\-/g, '');
     this.myForm?.get('cpf')?.setValue(convert)
    }
  }

  onSubmit() {
      const cliente: ICliente = this.myForm.value
      this.clientService.cadastrar(cliente).subscribe(clienteApi =>{
        Swal.fire("Funfou!", "Cadastro com sucesso!","success")
        console.log(clienteApi)
        this.router.navigate(['/'])
      },error =>{
        console.log(error)
      })
      this.myForm.reset()



  }

}
