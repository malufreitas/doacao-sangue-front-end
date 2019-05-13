import { TestBed } from '@angular/core/testing';

import { Relatorio1Service } from './relatorio1.service';

describe('Relatorio1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Relatorio1Service = TestBed.get(Relatorio1Service);
    expect(service).toBeTruthy();
  });
});
