import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {
  @Input()
  label: string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
