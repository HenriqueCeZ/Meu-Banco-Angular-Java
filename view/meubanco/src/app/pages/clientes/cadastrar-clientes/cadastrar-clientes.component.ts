import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente} from 'src/app/interfaces/cliente';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';
import { Cliente } from './cliente';

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
  id!: number

  client!: Cliente;

  constructor(form: FormBuilder, private clientService: ClientService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.myForm = form.group({
        nome: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required, Validators.email]),
        cpf: new FormControl('',[Validators.required, Validators.maxLength(11), Validators.minLength(11)]),
        observacoes: new FormControl('',),
        ativo: new FormControl(true),
    });

    this.client = new Cliente();

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      return this.id = params['id']

  });


  if(this.id){
    this.clientService.getClientById(this.id)
    .subscribe(response => this.client = response,
     errorResponse => this.client = new Cliente())

  }
}

  convertCpf(){

     let convert = this.myForm?.get('cpf')?.value.replace(/\.|\-/g, '');
     this.myForm?.get('cpf')?.setValue(convert)

  }

  onSubmit() {

    if(this.id){

      this.clientService.atualizar(this.client).subscribe(response =>{
        console.log(this.client.id)

      })

    }else{
      const cliente: ICliente = this.myForm.value
      this.clientService.cadastrar(cliente).subscribe(clienteApi =>{
        Swal.fire("Cadastro realizado!", "novo cliente adicionado!","success")
        console.log(clienteApi)
        this.router.navigate(['/'])
      },error =>{
        console.log(error)
      })
      this.myForm.reset()
    }


  }

  voltarListagem(){
    this.router.navigate(['/client'])
  }
}


