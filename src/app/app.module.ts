import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProdutosComponent } from './components/pages/produtos/produtos.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EditarComponent } from './components/editar/editar.component';
import { registerLocaleData } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import ptBr from '@angular/common/locales/pt';

registerLocaleData(ptBr);





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosComponent,
    CadastroComponent,
    HeaderComponent,
    FooterComponent,
    EditarComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,










  ],
  providers: [

    {
      provide: LOCALE_ID,
      useValue: 'pt',
      },
      {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
      },

  ],
  bootstrap: [AppComponent]


})
export class AppModule { }


