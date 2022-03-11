import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ocorrencia } from '../model/ocorrencia';
import { Regiao } from '../model/regiao';
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

  constructor(
    private ocorrenciaService: OcorrenciaService,
    private regiaoService: RegiaoService
    ) { }

  ngOnInit(): void {
    this.regioes = this.regiaoService.listRegioes();
    this.ocorrencia_exame = this.ocorrenciaService.listOcorrencias();
  }

}
