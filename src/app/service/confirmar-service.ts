import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Doacao } from '../model/doacao';
import { Doador } from '../model/doador';

@Injectable()
export class ConfirmarService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
    private options
  
  
    constructor(private http: HttpClient) {
        this.options = { headers: this.getHeaders() };
    }

    private getHeaders(): HttpHeaders {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        return headers;
    }
    
    getDoador() {
        return this.http.get<Doador[]>('https://doacaodesangue.herokuapp.com/doador')
    }
    
    
}