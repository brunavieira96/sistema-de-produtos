import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../components/interfaces/produto';
import { Observable } from 'rxjs';
import { Route, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  api = 'http://localhost:3000/produtos'

  constructor(private http: HttpClient) {

   }


   exibeProdutos() {
    return this.http.get<Produto[]>(this.api)
  
   }

   cadastroProdutos(produto: Produto) {
      return this.http.post<Produto>(this.api,produto) 
   }

   /*removerProdutos(id: number): Observable <any> {
    return this.http.delete(`http://localhost:3000/produtos/${id}`);
   } */

   removerPodutos(id:number) {
    const url = `${this.api}/${id}`;
    return this.http.delete(url);
   }

  }
