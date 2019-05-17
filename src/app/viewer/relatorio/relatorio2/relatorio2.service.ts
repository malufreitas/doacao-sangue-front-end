import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { Relatorio2 } from 'src/app/model/relatorio2';

@Injectable({
  providedIn: 'root'
})
export class Relatorio2Service {

  //private readonly API = `${environment.API}produto`;
    private readonly API = 'http://doacaodesangue.herokuapp.com/doador/tipo'

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<Relatorio2[]>(this.API).
    pipe(
      tap(console.log) //para debugar, ver os erros
    );
    
  }
  
}
