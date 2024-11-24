import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento.model';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: false,

  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.scss'
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("🚀 ~ ExcluirPensamentoComponent ~ ngOnInit ~ id:", id)
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    });
  }

  cancelar() {
    this.router.navigate(['/listarPensamento']);
  }

  excluirPensamento() {
    if(this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

}
