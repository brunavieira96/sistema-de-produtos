import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  api = 'http://localhost:3000/produtos';

  constructor() { }
}
