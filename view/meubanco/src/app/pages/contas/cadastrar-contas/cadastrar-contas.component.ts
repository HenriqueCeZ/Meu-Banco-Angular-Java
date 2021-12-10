import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { ContasService } from 'src/app/services/contas.service';
import { ClientService } from 'src/app/services/client.service';
import { IContas } from 'src/app/interfaces/contas';
import { ICliente } from 'src/app/interfaces/cliente';
import { Contas } from 'src/app/DTO/contas';



@Component({
  selector: 'app-cadastrar-contas',
  templateUrl: './cadastrar-contas.component.html',
  styleUrls: ['./cadastrar-contas.component.css']
})
export class CadastrarContasComponent implements OnInit  {


  clientes: ICliente[] = [];
  id!: number;
  conta!: Contas;
  idEdit!: number;
  form: FormGroup;





  constructor(form: FormBuilder,  private contaService: ContasService, private router: Router, private clienteService: ClientService, private activatedRoute: ActivatedRoute, private route: ActivatedRoute) {
    this.form = form.group({
      id: new FormControl(null),
      agencia: new FormControl('', Validators.required),
      cliente: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      saldo: new FormControl('', Validators.required),


    });
    this.conta = new Contas();
   }

  ngOnInit(): void {
    if(this.id = this.route.snapshot.params['id']){
      this.contaService.getClientById(this.id).subscribe((data: Contas)=>{
        this.conta = data;

      });
    }else{
      this.listarTodosClientes();

    }


  }
  getCLientById() {
    let id = this.form.get('cliente')?.value
    let cliente
    for (let element of this.clientes) {
      if (element.id == id) {
        cliente = element;
        break;
      }
    }
    return cliente
  }

  listarTodosClientes() {
    this.clienteService.listarTodosClientes().subscribe(clientesApi => {
    this.clientes  = clientesApi;
    });
  }



  onSubmit() {

    if(this.id){
      this.contaService.atualizar(this.conta).subscribe(response =>{
        Swal.fire("Cliente Atualizado!", "cliente atualizado com sucesso!","success")
        console.log(response)
        this.router.navigate(['/contas'])

      },error =>{
        Swal.fire({
          icon: 'error',
          title: 'Erro ao atualizar',
          text: `${error}`
        })
      })
    }
  else{
    let conta: IContas = this.form.value;
    conta.cliente = this.getCLientById()!
    this.contaService.create(conta).subscribe(contaApi => {
      Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Conta cadastrada com sucesso',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['/contas']);
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao cadastrar',
        text: `${error}`
      })
    })


}
}
}
