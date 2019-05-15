import { TestBed } from '@angular/core/testing';

import { Relatorio3Service } from './relatorio3.service';

describe('Relatorio1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Relatorio3Service = TestBed.get(Relatorio3Service);
    expect(service).toBeTruthy();
  });
});
