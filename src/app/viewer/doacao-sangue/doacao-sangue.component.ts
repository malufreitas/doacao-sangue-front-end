import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doacao-sangue',
  templateUrl: './doacao-sangue.component.html',
  styleUrls: ['./doacao-sangue.component.css']
})
export class DoacaoSangueComponent implements OnInit {

  onSubmit(form) {
    console.log(form);
  }

  constructor() { }

  ngOnInit() {
  }

}
