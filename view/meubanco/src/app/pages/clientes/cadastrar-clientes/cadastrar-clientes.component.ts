import { Component, OnInit } from '@angular/core';
import {  FormBuilder, NgForm, Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms'

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
  constructor(form: FormBuilder) {
    this.myForm = form.group({
      nome: new FormControl('',[Validators.required]),
      cpf: new FormControl('',[Validators.required, Validators.maxLength(11), Validators.minLength(11)]),
      observacoes: new FormControl('', [Validators.required, Validators.maxLength(150)]),
      ativo: new FormControl(false),
    });


  }

  ngOnInit(): void {

    ;
  }

  get nome() { return this.myForm.get('nome'); }
  convertCpf(){
    if(this.myForm){
     let convert = this.myForm?.get('cpf')?.value.replace(/\.|\-/g, '');
     this.myForm?.get('cpf')?.setValue(convert)
  }

  }

  verificaCpf(){
    if(!this.myForm.get('cpf')?.valid){
      this.cpfInvalido = true
      this.success = false
    }
  }

  verificaNome(){
    if(!this.myForm.get('nome')?.valid){
      this.nomeInvalido = true
      this.success = false
    }
  }

  onSubmit() {
    if(this.myForm.valid){
      alert(`Nome: ${this.myForm?.get('nome')?.value}\ncpf: ${this.myForm?.get('CPF')?.value}\nObservasões: ${this.myForm?.get('observacoes')?.value}\nativo: ${this.myForm?.get('ativo')?.value}`)
      this.success = true
      this.cpfInvalido = false
      this.nomeInvalido = false
      this.myForm.reset()


    }else{
      alert("Preencha os campos corretamente!")
    }



}
  }
