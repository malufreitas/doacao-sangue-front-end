import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosConsultaComponent } from './produtos-consulta.component';

describe('ProdutosConsultaComponent', () => {
  let component: ProdutosConsultaComponent;
  let fixture: ComponentFixture<ProdutosConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
