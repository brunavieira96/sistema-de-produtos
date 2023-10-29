import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { ProdutosComponent } from './components/pages/produtos/produtos.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';

const routes: Routes = [

  {
    path: 'produtos', component: ProdutosComponent
  },

  {
    path: '', component: HomeComponent
  },

  {
    path: 'cadastro', component: CadastroComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
