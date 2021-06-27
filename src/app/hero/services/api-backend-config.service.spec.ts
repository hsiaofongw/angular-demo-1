import { TestBed } from '@angular/core/testing';
import { HeroModule } from '../hero.module';

import { HttpAPIBackendConfigService } from './api-backend-config.service';

describe('ApiBackendConfigService', () => {
  let service: HttpAPIBackendConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeroModule],
    });
    service = TestBed.inject(HttpAPIBackendConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
