import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Relatorio1 } from "src/app/model/relatorio1";

@Injectable({
  providedIn: "root"
})
export class Relatorio1Service {
  constructor(private http: HttpClient) {}

  list() {
    return this.http
      .get<Relatorio1[]>(`${environment.API}` + "hemocentro/demandas")
      .pipe(
        tap(console.log) //para debugar, ver os erros
      );
  }
}
