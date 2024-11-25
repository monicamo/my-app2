import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  standalone: false,

  templateUrl: './botao-carregar-mais.component.ts.component.html',
  styleUrl: './botao-carregar-mais.component.ts.component.scss'
})
export class BotaoCarregarMaisComponentTsComponent {
  @Input() haMaisPensamentos: boolean = false;
}
