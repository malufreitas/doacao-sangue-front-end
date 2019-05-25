import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Relatorio3Component } from './relatorio3.component';

describe('Relatorio3Component', () => {
  let component: Relatorio3Component;
  let fixture: ComponentFixture<Relatorio3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Relatorio3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Relatorio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
