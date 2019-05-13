import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Relatorio4 } from './relatorio4';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Relatorio4Service {

  private readonly API = `${environment.API}produto`;
  //private readonly API = 'http://localhost:3000/produto'

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<Relatorio4[]>(this.API).
    pipe(
      tap(console.log) //para debugar, ver os erros
    );
  }
  
}
