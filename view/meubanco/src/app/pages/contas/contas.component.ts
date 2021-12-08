import { Component, OnInit } from '@angular/core';
import { IContas } from 'src/app/interfaces/contas';
import { ContasService } from 'src/app/services/contas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {
  contas: IContas[] = []
  constructor(private contasService: ContasService) { }

  ngOnInit(): void {
    this.listarTodasContas()
  }
  listarTodasContas(){
  this.contasService.listarTodasConta().subscribe(contasApi =>{
    this.contas =  contasApi
  })
  }
  deletar(id: number) {
    Swal.fire({
      title: 'Você tem certeza que deseja deletar?',
      text: "Não tem como reverter essa ação",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: 'grey',
      confirmButtonText: 'Deletar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.contasService.remover(id).subscribe(clientesApi => {
          Swal.fire(
            'Deletado',
            'Cliente deletado com sucesso',
            'success'
          );
          this.listarTodasContas()
          console.log(id)
        }, error => {
          console.error(error)
        })

      }
    })
  }


}
