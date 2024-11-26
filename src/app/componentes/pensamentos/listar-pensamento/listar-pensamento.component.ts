import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento.model';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  standalone: false,

  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.scss',
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  pesquisarPensamentos() {
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;

    this.service.listar(this.paginaAtual, this.filtro).subscribe(listaPensamentos => {
      this.listaPensamentos = listaPensamentos;
    })
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro).subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);
      if (!listaPensamentos.length) {
        this.haMaisPensamentos = false;
      }
    });
  }
}
