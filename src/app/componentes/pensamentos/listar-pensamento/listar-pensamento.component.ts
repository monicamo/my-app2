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

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }


}
