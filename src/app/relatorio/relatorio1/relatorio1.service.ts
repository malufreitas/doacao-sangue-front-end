import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Relatorio1 } from './relatorio1';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Relatorio1Service {

//private readonly API = `${environment.API}produto`;
  private readonly API = 'http://doacaodesangue.herokuapp.com/hemocentro/demandas'

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<Relatorio1[]>(this.API).
    pipe(
      tap(console.log) //para debugar, ver os erros
    );
  }
  
}
