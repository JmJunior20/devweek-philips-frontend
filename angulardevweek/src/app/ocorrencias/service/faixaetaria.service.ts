import { Injectable } from '@angular/core';
import { Faixaetaria } from '../model/faixaetaria';

@Injectable({
  providedIn: 'root'
})

export class FaixaetariaService {

  constructor() { }

  listFaixaEtaria(): Faixaetaria[]{
    return [
      { id: 1, faixa_i: 0, faixa_n: 14, descricao: 'Até 14 anos' }
    ]
  }
}
