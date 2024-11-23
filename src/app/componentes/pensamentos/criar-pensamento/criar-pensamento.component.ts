import { Component } from '@angular/core';
import { Pensamento } from '../../../modelos/pensamento';

@Component({
  selector: 'app-criar-pensamento',
  standalone: false,

  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.scss'
})
export class CriarPensamentoComponent {

  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  criarPensamento() {
    alert("Foi");
  }

  cancelar() {
    alert("Foi");
  }

}
