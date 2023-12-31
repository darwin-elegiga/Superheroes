import { TestBed } from '@angular/core/testing';

import { HeroesSerService } from './heroes-ser.service';

describe('HeroesSerService', () => {
  let service: HeroesSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
