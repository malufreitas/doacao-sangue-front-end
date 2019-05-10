import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  provideIn: 'root'
})

export class CursosService {
  private readonly API = 'https://wwww.../produtos';
  contructor(private http: HttpCliente) {}
    
  list(){
   return this.http.get(this.API);
  }
}
