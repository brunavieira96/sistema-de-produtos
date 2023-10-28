import { Component } from '@angular/core';
import { Produto } from '../../interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  
  produtos: Produto[] = [];

  constructor (private produtosService : ProdutosService) {

  }

  ngOnInit() {

    this.produtosService.exibeProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
      },
      (error) => {
        console.log(error);

      }
    )     
  }
}
