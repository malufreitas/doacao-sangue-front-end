import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dados-entrega-form',
  templateUrl: './dados-entrega-form.component.html',
  styleUrls: ['./dados-entrega-form.component.css']
})
export class DadosEntregaFormComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

}
