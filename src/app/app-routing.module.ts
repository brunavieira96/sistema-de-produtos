import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ProdutosComponent } from './components/pages/produtos/produtos.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { EditarComponent } from './components/editar/editar.component';


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

  {
    path: 'editar/:id', component: EditarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(public router : Router) {

  }


}


