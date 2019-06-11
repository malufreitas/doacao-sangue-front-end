import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteModalComponent } from './teste-modal.component';

describe('TesteModalComponent', () => {
  let component: TesteModalComponent;
  let fixture: ComponentFixture<TesteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
