import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HemocentroComponent } from './hemocentro.component';

describe('HemocentroComponent', () => {
  let component: HemocentroComponent;
  let fixture: ComponentFixture<HemocentroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HemocentroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HemocentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
