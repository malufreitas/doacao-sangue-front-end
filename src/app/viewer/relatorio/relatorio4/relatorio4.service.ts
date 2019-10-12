import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

import { Relatorio4 } from "src/app/model/relatorio4";

@Injectable({
  providedIn: "root"
})
export class Relatorio4Service {
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Relatorio4[]>(`${environment.API}` + "produto").pipe(
      tap(console.log) //para debugar, ver os erros
    );
  }
}
