import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  standalone: false,

  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.scss'
})
export class ListarPensamentoComponent {
  listaPensamentos = [
   {
      conteudo: 'I love Angular',
      autoria: 'Nay',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Angular',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Nay',
      modelo: 'modelo3'
    }

  ];
}
