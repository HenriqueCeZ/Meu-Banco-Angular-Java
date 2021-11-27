import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudo',
  templateUrl: './estudo.component.html',
  styleUrls: ['./estudo.component.css']
})
export class EstudoComponent implements OnInit {
  @Input()
  exibindo: boolean = false;

  @Input()
  exibirTexto: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
