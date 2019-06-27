import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosEntregaFormComponent } from './dados-entrega-form.component';

describe('DadosEntregaFormComponent', () => {
  let component: DadosEntregaFormComponent;
  let fixture: ComponentFixture<DadosEntregaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosEntregaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosEntregaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
