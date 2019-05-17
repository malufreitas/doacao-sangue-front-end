import { TestBed } from '@angular/core/testing';
import { Relatorio2Service } from './relatorio2.service';


describe('Relatorio1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Relatorio2Service = TestBed.get(Relatorio2Service);
    expect(service).toBeTruthy();
  });
});
