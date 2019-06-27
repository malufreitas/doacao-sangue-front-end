import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLojaComponent } from './admin-loja.component';

describe('AdminLojaComponent', () => {
  let component: AdminLojaComponent;
  let fixture: ComponentFixture<AdminLojaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLojaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
