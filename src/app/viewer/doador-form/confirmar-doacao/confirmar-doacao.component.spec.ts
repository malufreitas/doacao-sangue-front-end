import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarDoacaoComponent } from './confirmar-doacao.component';

describe('ConfirmarDoacaoComponent', () => {
  let component: ConfirmarDoacaoComponent;
  let fixture: ComponentFixture<ConfirmarDoacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarDoacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarDoacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
