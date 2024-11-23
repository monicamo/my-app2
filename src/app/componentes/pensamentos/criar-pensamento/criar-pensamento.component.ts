import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  standalone: false,

  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.scss'
})
export class CriarPensamentoComponent {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: ''
  }

}
