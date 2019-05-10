import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  provideIn: 'root'
})

export class CursosService {

  contructor(private http: HttpCliente) {}

}
