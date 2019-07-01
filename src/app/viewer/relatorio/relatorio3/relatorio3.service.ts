import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

import { Relatorio3 } from "../../../model/relatorio3";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class Relatorio3Service {
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Relatorio3[]>(`${environment.API}` + "demandas").pipe(
      tap(console.log) //para debugar, ver os erros
    );
  }
}
