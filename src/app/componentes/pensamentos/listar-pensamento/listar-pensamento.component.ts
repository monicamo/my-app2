import { Component } from '@angular/core';
import { Pensamento } from '../../../modelos/pensamento';

@Component({
  selector: 'app-listar-pensamento',
  standalone: false,

  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.scss',
})
export class ListarPensamentoComponent {
  listaPensamentos: Pensamento[] = [

  ];
}
