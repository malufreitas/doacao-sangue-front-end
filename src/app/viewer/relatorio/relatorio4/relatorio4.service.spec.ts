import { TestBed } from '@angular/core/testing';

import { Relatorio4Service } from './relatorio4.service';

describe('Relatorio4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Relatorio4Service = TestBed.get(Relatorio4Service);
    expect(service).toBeTruthy();
  });
});
