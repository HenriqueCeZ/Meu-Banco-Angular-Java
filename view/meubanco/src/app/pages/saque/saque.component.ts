import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  @Input()
  titulo: string = 'Meu título';
  exibir: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
