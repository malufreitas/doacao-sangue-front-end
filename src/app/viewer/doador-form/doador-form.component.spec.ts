import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoadorFormComponent } from './doador-form.component';

describe('DoadorFormComponent', () => {
  let component: DoadorFormComponent;
  let fixture: ComponentFixture<DoadorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoadorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
