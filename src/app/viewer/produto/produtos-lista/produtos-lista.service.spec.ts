import { TestBed } from '@angular/core/testing';

import { ProdutosListaService } from './produtos-lista.service';

describe('ProdutosListaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdutosListaService = TestBed.get(ProdutosListaService);
    expect(service).toBeTruthy();
  });
});
