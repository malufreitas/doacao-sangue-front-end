import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Relatorio4Component } from './relatorio4.component';

describe('Relatorio4Component', () => {
  let component: Relatorio4Component;
  let fixture: ComponentFixture<Relatorio4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Relatorio4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Relatorio4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
