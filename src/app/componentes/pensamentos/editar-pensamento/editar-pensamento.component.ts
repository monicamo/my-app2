import { Component } from '@angular/core';
import { Pensamento } from '../pensamento.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  standalone: false,

  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.scss'
})
export class EditarPensamentoComponent {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
        this.pensamento = pensamento
    })
  }

  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}
