import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { Relatorio3 } from '../../../model/relatorio3';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Relatorio3Service {

 // private readonly API = `${environment.API}produto`;
  private readonly API = 'http://doacaodesangue.herokuapp.com/demandas/tipo'

  constructor(
    private http: HttpClient
  ) { }

  list() {
    return this.http.get<Relatorio3[]>(this.API).
    pipe(
      tap(console.log) //para debugar, ver os erros
    );
  }
  
}
