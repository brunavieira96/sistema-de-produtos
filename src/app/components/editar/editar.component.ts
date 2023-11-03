import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Produto } from '../interfaces/produto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {



  constructor(private produtosService : ProdutosService, private router:ActivatedRoute ) {

  }

    produtoFormEditar = new FormGroup({
    nome: new FormControl('', [Validators.maxLength(20)]),
    codigoBarras: new FormControl('', [Validators.maxLength(10)]),
    preco: new FormControl('', [Validators.maxLength(11)]),

  })



  ngOnInit(): any {

      this.produtosService.atualizacaoProdutoId(this.router.snapshot.params.id)
      .subscribe((resultado : any) => { console.log(resultado);

      this.produtoFormEditar = new FormGroup( {

        nome: new FormControl(resultado['nome'], [Validators.maxLength(20)]),
        codigoBarras: new FormControl(resultado['codigoBarras'],[Validators.maxLength(10)]),
        preco: new FormControl(resultado['preco'], [Validators.maxLength(11)])
      } );
  } )
}

  atualizarProduto() {
    console.log(this.produtoFormEditar.value)
    this.produtosService.atualizarProdutoDaLista(this.router.snapshot.params.id, this.produtoFormEditar.value
      ).subscribe((resultado) =>{
        Swal.fire({

          icon: 'success',
          title: 'O Produto foi Salvo!',
          showConfirmButton: false,
          timer: 1500
      });
      })


  }

}


