import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHemocentroComponent } from './admin-hemocentro.component';

describe('AdminHemocentroComponent', () => {
  let component: AdminHemocentroComponent;
  let fixture: ComponentFixture<AdminHemocentroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHemocentroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHemocentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
