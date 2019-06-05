import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoProdutosComponent } from './catalogo-produtos.component';

describe('CatalogoProdutosComponent', () => {
  let component: CatalogoProdutosComponent;
  let fixture: ComponentFixture<CatalogoProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
