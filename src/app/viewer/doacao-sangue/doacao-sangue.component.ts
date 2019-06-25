import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-doacao-sangue',
  templateUrl: './doacao-sangue.component.html',
  styleUrls: ['./doacao-sangue.component.css']
})
export class DoacaoSangueComponent implements OnInit {

  //images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  onSubmit(form) {
    console.log(form);
  }

  constructor() { }

  ngOnInit() {
  }

}
