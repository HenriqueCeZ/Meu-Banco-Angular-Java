import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente} from 'src/app/interfaces/cliente';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';
import { Cliente } from '../../../DTO/cliente';
import * as _ from 'lodash';
import 'lodash';


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

  constructor(form: FormBuilder, private clientService: ClientService, private router: Router,  private route: ActivatedRoute) {

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
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClientById(this.id).subscribe((data: Cliente)=>{
      this.client = data;
    });
  }

  convertCpf(){

     let convert = this.myForm?.get('cpf')?.value.replace(/\.|\-/g, '');
     this.myForm?.get('cpf')?.setValue(convert)

  }

  onSubmit() {

    if(this.id){

      this.clientService.atualizar(this.client).subscribe(response =>{
        Swal.fire("Cliente Atualizado!", "Cliente atualizado com sucesso!","success")
        this.router.navigate(['/clientes'])

      },error =>{
        let erro = _.get(error, 'error.detalhes')
        Swal.fire({
          icon: 'error',
          title: 'Erro ao atualizar',
          text: `${erro}`
        })
      })

    }else{
      const cliente: ICliente = this.myForm.value
      this.clientService.cadastrar(cliente).subscribe(clienteApi =>{
        Swal.fire("Cadastro realizado!", "novo cliente adicionado!","success")

        this.router.navigate(['/clientes'])
      },error =>{
        let erro = _.get(error, 'error.detalhes')
        Swal.fire({
          icon: 'error',
          title: 'Erro ao cadastrar',
          text: `${erro}`
        })
      })

    }


  }

  voltarListagem(){
    this.router.navigate(['/client'])
  }
}


