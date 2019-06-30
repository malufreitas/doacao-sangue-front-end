import { Produto } from 'src/app/model/produto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoDeComprasService {

  constructor() { }

  items: Produto[] = []

  addItem(item: Produto) {
    this.items.push(item)
    sessionStorage.setItem("cart", JSON.stringify(this.items))
    console.log(this.items)
    console.log(sessionStorage)
  }

  removeItem(Produto) {
    this.items.splice(this.items.indexOf(Produto), 1)
    //salva na sessão
    sessionStorage.setItem("cart", JSON.stringify(this.items))
  }

  total() {//:number{
    console.log('items > ', this.items)
    return this.items
      .map(item => item.valorunitario)
      .reduce((prev, value) => prev + value, 0)
  }

}
