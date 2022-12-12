import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroId } from '@src/app/modules/heroes/domain/value-objects/hero-id';
import { of, tap } from 'rxjs';
import { Hero } from '../../domain/hero';
import { HeroName } from '../../domain/value-objects/hero-name';
import { HeroPowers } from '../../domain/value-objects/hero-powers';
import { HeroDetailResolver } from './hero-detail.resolver';

describe('HeroDetailResolver', () => {
  let validHeroId = HeroId.random().toString();
  let resolver: HeroDetailResolver;
  let route: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [routerProviderParams],
    });
    resolver = TestBed.inject(HeroDetailResolver);
    route = TestBed.get(ActivatedRoute);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should return an Hero', async () => {
    const dummyHero = Hero.create(
      'Hero 3' as unknown as HeroName,
      ['power 4'] as HeroPowers
    );

    spyOn(resolver, 'getHeroById').and.returnValue(of(dummyHero));

    resolver
      .resolve(route.snapshot)
      .pipe(
        tap((hero) => {
          expect(hero).toEqual(dummyHero);
        })
      )
      .subscribe();
  });

  const routerProviderParams = {
    provide: ActivatedRoute,
    useValue: {
      snapshot: {
        paramMap: convertToParamMap({ id: validHeroId }),
      },
    },
  };

  it('should return an error', async () => {
    spyOn(resolver, 'getHeroById').and.returnValue(of(null));

    resolver
      .resolve(route.snapshot)
      .pipe(
        tap((hero) => {
          expect(hero).toBeNull();
        })
      )
      .subscribe();
  });
});
