import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Relatorio1Component } from './relatorio1.component';

describe('Relatorio1Component', () => {
  let component: Relatorio1Component;
  let fixture: ComponentFixture<Relatorio1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Relatorio1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Relatorio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
