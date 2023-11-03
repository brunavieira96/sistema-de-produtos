
import { Component, OnInit } from '@angular/core';
import { Produto } from '../../interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute} from '@angular/router'
import { AppComponent } from 'src/app/app.component';
import { Observable } from 'rxjs';
import localePt from '@angular/common/locales/pt'




@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent  {



  produtos: Produto[] = [];



  constructor (public produtosService : ProdutosService, _router : Router, _activatedRoute : ActivatedRoute,
    _appComponent : AppComponent) {



  }




  ngOnInit(): void {


    this.produtosService.exibeProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
      },
      (error) => {
        console.log(error);

      }
    )




  }

   remover(id: any) {

     this.produtosService.removerProdutos(id).subscribe( (resultado) => {
      Swal.fire({

        icon: 'success',
        title: 'O Produto foi Excluído!',
        showConfirmButton: false,
        timer: 1500
    });

      this.ngOnInit();

     }



      );


}


  }




