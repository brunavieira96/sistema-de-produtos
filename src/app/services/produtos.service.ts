
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../components/interfaces/produto';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {



  api = 'http://localhost:3000/produtos'



  constructor(public http: HttpClient, router : Router, activatedRoute : ActivatedRoute) {


   }


   exibeProdutos() {
    return this.http.get<Produto[]>(this.api)

   }

   cadastroProdutos(produto: Produto) {
      return this.http.post<Produto>(this.api,produto)
   }

   removerProdutos(id: any): Observable <any> {
    return this.http.delete(`${this.api}/${id}`);

   }

   atualizacaoProdutoId(id : number) {
    return this.http.get(`${this.api}/${id}`);
   }

   atualizarProdutoDaLista(id: number, produtoFormEditar : any) {
    return this.http.put(`${this.api}/${id}`, produtoFormEditar);
   }





  }



