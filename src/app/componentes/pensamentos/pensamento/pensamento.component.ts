import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento.model';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  standalone: false,

  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.scss'
})
export class PensamentoComponent {

  // Usar o Operador de Não-Nulo (!)
  @Input() pensamento: Pensamento = {
    id: 0,
    autoria: 'Nay',
    conteudo: 'I love angular',
    favorito: false,
    modelo: 'modelo2'
  };

  @Input() listaFavoritos: Pensamento[] = [];

  constructor(private service: PensamentoService){}

  larguraPensamento(): string {

    /*
     "operador de encadeamento opcional" (optional chaining), introduzido no ECMAScript 2020 (ES11). Ele é usado para acessar propriedades de um objeto de forma segura, evitando erros quando alguma propriedade no caminho é undefined ou null.
     */
    if(this.pensamento?.conteudo?.length >= 256) {
      return 'pensamento-g';
    }

    return 'pensamento-p';
  }

  mudarIconeFavorito(): string {
    if(this.pensamento.favorito == false) {
      return 'inativo';
    }

    return 'ativo';
  }

  atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe(() => {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1);
    });
  }
}
