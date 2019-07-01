import { Component, OnInit, TemplateRef } from "@angular/core";
import { Observable, Subject, empty } from "rxjs";
import { delay, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

//import { default as swal } from 'sweetalert2'

import { Produto } from "src/app/model/produto";
import { AppComponent } from "src/app/app.component";
import { CarrinhoDeComprasService } from "./carrinho-de-compras.service";
import { environment } from "src/environments/environment.prod";

@Component({
  selector: "app-carrinho-de-compras",
  templateUrl: "./carrinho-de-compras.component.html",
  styleUrls: ["./carrinho-de-compras.component.css"]
})
export class CarrinhoDeComprasComponent implements OnInit {
  // produtos no carrinho
  produtos$: Observable<any>;
  error$ = new Subject<boolean>();

  public produtos: Produto[];

  // Criei para um função de teste
  public sucRequi: boolean = false;

  public filtros = {
    id: ""
  };

  // Uso para o Modal
  modalRef: BsModalRef;
  message: string;
  // Uso para o Modal

  constructor(
    private http: HttpClient,
    private app: AppComponent,
    private carrinhoService: CarrinhoDeComprasService,
    private modalService: BsModalService
  ) {}

  // Ao abrir a pagina, aparece os elementos do carrinho
  ngOnInit() {
    let carrinhoSession = sessionStorage.getItem("cart");
    if (carrinhoSession != null) {
      this.carrinhoService.items = JSON.parse(carrinhoSession);
    }

    console.log(this.items);
    console.log(sessionStorage);
    console.log(carrinhoSession);
  }

  items(): Produto[] {
    console.log(this.carrinhoService.items.length);
    return this.carrinhoService.items;
  }

  removeItem(Produto) {
    let c = this.carrinhoService;
    alert("Item excluído do carrinho.");
    return c.removeItem(Produto);
    /*
    swal({
      title: 'Confirmação',
      text: "Você tem certeza que deseja remover este item do carrinho?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#449d44',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim'
    })
    .then(function () {
      swal(
        'Excluído!',
        'Item excluído do carrinho.',
        'success'
      )
      return c.removeItem(Produto)
    })
    */
  }

  total(): number {
    return this.carrinhoService.total();
  }

  // Abre modal pedindo confirmação para excluir o produto do carrinho
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: "modal-sm" });
  }

  // Caso queira excluir o prroduto do carrinho
  confirm(Produto): void {
    this.removeItem(Produto);
    this.modalRef.hide();
  }

  // Caso queira manter o produto do carrinho
  decline(): void {
    this.modalRef.hide();
  }

  // Apenas um teste, não to usando para nada
  pegaProdutoID(filtro?) {
    console.log(filtro);

    return this.http
      .get<any[]>(`${environment.API}` + "produto", { params: filtro })
      .pipe(
        delay(2000),
        tap(console.log)
      )
      .subscribe(produtos => {
        this.produtos = produtos;
        this.sucRequi = true;
      });
  }
}
