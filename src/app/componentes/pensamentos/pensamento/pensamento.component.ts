import { Component, Input } from '@angular/core';
import { Pensamento } from '../../../modelos/pensamento';

@Component({
  selector: 'app-pensamento',
  standalone: false,

  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.scss'
})
export class PensamentoComponent {

  // Usar o Operador de Não-Nulo (!)
  @Input() pensamento!: Pensamento;

  larguraPensamento(): string {
    if(this.pensamento?.conteudo?.length >= 256) {
      return 'pensamento-g';
    }

    return 'pensamento-p';
  }
}
