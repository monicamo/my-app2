import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCarregarMaisComponentTsComponent } from './botao-carregar-mais.component.ts.component';

describe('BotaoCarregarMaisComponentTsComponent', () => {
  let component: BotaoCarregarMaisComponentTsComponent;
  let fixture: ComponentFixture<BotaoCarregarMaisComponentTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotaoCarregarMaisComponentTsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCarregarMaisComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
