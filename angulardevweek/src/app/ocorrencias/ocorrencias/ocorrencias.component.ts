import { Component, OnDestroy, OnInit } from '@angular/core';
import { Faixaetaria } from '../model/faixaetaria';
import { Ocorrencia } from '../model/ocorrencia';
import { Regiao } from '../model/regiao';
import { FaixaetariaService } from '../service/faixaetaria.service';
import { OcorrenciaService } from '../service/ocorrencia.service';
import { RegiaoService } from '../service/regiao.service';


@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.component.html',
  styleUrls: ['./ocorrencias.component.css']
})
export class OcorrenciasComponent implements OnInit{

  ocorrencia_exame: Ocorrencia[] = [];
  regioes: Regiao[] = [];
  faixaetarias: Faixaetaria[] = [];

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private regiaoService: RegiaoService,
    private faixaEtariaService: FaixaetariaService,
    ) { }

  ngOnInit(): void {
    this.regiaoService.listRegioes() .subscribe(regioes => {this.regioes = regioes});
    this.ocorrencia_exame = this.ocorrenciaService.listOcorrencias();
    this.faixaetarias = this.faixaEtariaService.listFaixaEtaria();
  }

}
