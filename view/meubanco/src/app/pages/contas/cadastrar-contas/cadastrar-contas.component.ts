import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContasService } from 'src/app/services/contas.service';
import { Contas } from '../contas';



@Component({
  selector: 'app-cadastrar-contas',
  templateUrl: './cadastrar-contas.component.html',
  styleUrls: ['./cadastrar-contas.component.css']
})
export class CadastrarContasComponent implements OnInit  {


  form!: FormGroup;


  constructor(

    private formBuilder: FormBuilder,
    public activatedRoute: ActivatedRoute,
    private contasService: ContasService,
    public router: Router,


  ) {

  }

  ngOnInit() {
    this.createFormGoup();
  }

  createFormGoup() {
    this.form = this.formBuilder.group({
      agencia             : new FormControl('', [Validators.required]),
      numero              : new FormControl('', [Validators.required]),
      saldo               : new FormControl(0, [Validators.required]),
      nomeCliente         : new FormControl('', ),
      cpfCliente          : new FormControl('', ),
      emailCliente        : new FormControl('', ),
      observacoesCliente  : new FormControl(''),
      id : new FormControl(),

    });
  }

  onSubmit() {
 this.create()
  }

  create() {
    const entity = this.formToConta();
    console.log(entity)
    this.contasService.create(entity).subscribe(clienteApi =>{
      Swal.fire("Cadastro realizado!", "nova conta criada!","success")
      console.log(clienteApi)
      this.router.navigate(['/'])
       },error =>{
      console.log(error)
     })
  }

  formToConta(): Contas {
    const formValue = this.form.value;
    const entity = new Contas({
      agencia       : formValue.agencia,
      numero        : formValue.numero,
      saldo         : formValue.saldo,
      cliente: {
        id          : formValue.id,
        nome        : formValue.nomeCliente,
        cpf         : formValue.cpfCliente,
        email       : formValue.emailCliente,
        observacoes : formValue.observacoesCliente,
        ativo       : false,

      }
    });
    return entity;
  }

}


