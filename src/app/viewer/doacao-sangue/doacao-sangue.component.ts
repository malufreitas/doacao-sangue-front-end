import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';


@Component({
  selector: 'app-doacao-sangue',
  templateUrl: './doacao-sangue.component.html',
  styleUrls: ['./doacao-sangue.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class DoacaoSangueComponent implements OnInit {


  onSubmit(form) {
    console.log(form);
  }

  constructor() { }

  ngOnInit() {
  }

}
