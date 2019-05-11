import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Relatorio2Component } from './relatorio2.component';

describe('Relatorio2Component', () => {
  let component: Relatorio2Component;
  let fixture: ComponentFixture<Relatorio2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Relatorio2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Relatorio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
