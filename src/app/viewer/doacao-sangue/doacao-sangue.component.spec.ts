import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacaoSangueComponent } from './doacao-sangue.component';

describe('DoacaoSangueComponent', () => {
  let component: DoacaoSangueComponent;
  let fixture: ComponentFixture<DoacaoSangueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoacaoSangueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoacaoSangueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
