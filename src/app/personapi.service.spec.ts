import { TestBed } from '@angular/core/testing';

import { PersonapiService } from './personapi.service';

describe('PersonapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonapiService = TestBed.get(PersonapiService);
    expect(service).toBeTruthy();
  });
});
