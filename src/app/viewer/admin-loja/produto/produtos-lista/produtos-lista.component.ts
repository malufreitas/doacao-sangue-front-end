import { Component, OnInit, TemplateRef } from "@angular/core";
import { Observable, empty, Subject } from "rxjs";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { catchError, map } from "rxjs/operators";

import { ProdutosListaService } from "./produtos-lista.service";
import { Produto } from "src/app/model/produto";

@Component({
  selector: "app-produtos-lista",
  templateUrl: "./produtos-lista.component.html",
  styleUrls: ["./produtos-lista.component.css"]
})
export class ProdutosListaComponent implements OnInit {
  //produtos: Produto[];

  //Sempre que tiver um $ do lado é um observable
  //Vai atribuir a variavel produtos$ o : this.service.list()
  produtos$: Observable<Produto[]>;
  error$ = new Subject<boolean>();

  // Parao Modal Pop-up
  modalRef: BsModalRef;
  message: string;

  private produto = {
    nome: null,
    quantidade: null,
    descricao: null,
    valorunitario: null,
    categoria: null,
    tamanho: null,
    volume: null,
    material: null,
    genero: null
  };

  constructor(
    private service: ProdutosListaService,
    private modalService: BsModalService,
    private produtosListaService: ProdutosListaService
  ) {}

  ngOnInit() {
    console.log(this.produtos$);
    this.produtos$ = this.service.list().pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        return empty();
      })
    );
  }

  setCategoria(tipo) {
    this.produto.categoria = tipo;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: "modal-sm" });
  }

  salvar(formulario) {
    console.log(formulario);
    this.produtosListaService.salvarProdutos(formulario);
  }

  cancelar(): void {
    this.modalRef.hide();
  }
}
