import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjudaPageComponent } from './ajuda-page.component';

describe('AjudaPageComponent', () => {
  let component: AjudaPageComponent;
  let fixture: ComponentFixture<AjudaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjudaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjudaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
