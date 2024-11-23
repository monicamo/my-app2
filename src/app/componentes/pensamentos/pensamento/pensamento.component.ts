import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  standalone: false,

  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.scss'
})
export class PensamentoComponent {
  @Input() pensamento: any;
}
