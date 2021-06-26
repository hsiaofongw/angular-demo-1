import { TestBed } from '@angular/core/testing';

import { GraphQLHeroDataService } from './graphql-hero-data.service';

describe('GraphqlHeroDataService', () => {
  let service: GraphQLHeroDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphQLHeroDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
