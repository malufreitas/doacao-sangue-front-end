import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

import { Relatorio2 } from "src/app/model/relatorio2";

@Injectable({
  providedIn: "root"
})
export class Relatorio2Service {
  constructor(private http: HttpClient) {}

  list() {
    return this.http
      .get<Relatorio2[]>(`${environment.API}` + "doador/tipo")
      .pipe(
        tap(console.log) //para debugar, ver os erros
      );
  }
}
