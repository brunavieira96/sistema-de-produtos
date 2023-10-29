import { Component } from '@angular/core';
import { Produto } from '../../interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router'



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

  async remover(id: number) {

    await this.produtosService.removerPodutos(id).subscribe(
      (result) => {
        Swal.fire({
        
          icon: 'success',
          title: 'O Produto foi Excluido!',
          showConfirmButton: false,
          timer: 1500
      });
      },
      (error) => {
        const { message } = error;
        Swal.fire('Parece que Houve um Erro Para Excluir', message, 'error');
      }

     
      
    );


  

  /*remover(id: number) {
    this.produtosService.removerProdutos(id).subscribe({

      
    }); */
  }

}
  







