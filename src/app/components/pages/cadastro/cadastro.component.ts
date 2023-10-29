import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../../interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  constructor(private produtosService : ProdutosService) {

  }

    produtoForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    codigoBarras: new FormControl('', Validators.required),
    preco: new FormControl(),

  })

  enviarProduto() {
    const produto: Produto = this.produtoForm.value as Produto;

    this.produtosService.cadastroProdutos(produto).subscribe(
      (result) => {
        Swal.fire({
        
          icon: 'success',
          title: 'O Produto foi Salvo!',
          showConfirmButton: false,
          timer: 1500
      });
      },
      (error) => {
        const { message } = error;
        Swal.fire('Parece que Houve um Erro no Cadastro', message, 'error');
      }
    );
  }

    
  }



