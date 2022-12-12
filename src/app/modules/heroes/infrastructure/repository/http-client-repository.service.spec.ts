import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientRepositoryService } from '@app/modules/heroes/infrastructure/repository/http-client-repository.service';
import { Hero } from '@src/app/modules/heroes/domain/hero';
import { HeroName } from '@src/app/modules/heroes/domain/value-objects/hero-name';
import { HeroPowers } from '@src/app/modules/heroes/domain/value-objects/hero-powers';
import { environment } from '@src/environments/environment';
import { switchMap, tap } from 'rxjs';

describe('HttpClientRepositoryService', () => {
  const dummyHeroes = [
    {
      id: '059f7287-c555-443d-a066-330644dbbb12',
      name: 'Hero 1',
      powers: ['power 1'],
    },
    {
      id: 'f312d2ce-2bbc-4416-b81e-80f43f52c70d',
      name: 'Hero 2',
      powers: ['power 2', 'power 3'],
    },
  ] as unknown as Hero[];

  const apiUrl = environment.apiUrl + 'data/';

  let injector: TestBed;
  let service: HttpClientRepositoryService;

  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClientRepositoryService],
    });
  });

  beforeEach(() => {
    injector = getTestBed();
    service = injector.get(HttpClientRepositoryService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Hero[]', async () => {
    service.searchAll().subscribe((heroes) => {
      expect(heroes.length).toBe(2);
      expect(heroes).toEqual(dummyHeroes);
    });

    const req = httpMock.expectOne(`${apiUrl}`);

    req.flush(dummyHeroes);
  });

  it('should return an Hero', async () => {
    const dummyHero = dummyHeroes[0];
    service.searchById(dummyHero.id).subscribe((hero) => {
      expect(hero).toEqual(dummyHero);
    });

    const req = httpMock.expectOne(`${apiUrl}${dummyHero.id}`);

    req.flush(dummyHero);
  });

  it('should crate an Hero an remove it', async () => {
    const dummyHero = Hero.create(
      'Hero 3' as unknown as HeroName,
      ['power 4'] as HeroPowers
    );

    service
      .save(dummyHero)
      .pipe(
        tap((hero) => {
          expect(hero).toEqual(dummyHero);
        }),
        switchMap((hero) => service.delete(hero.id))
      )
      .subscribe();

    const req = httpMock.expectOne(`${apiUrl}`);

    expect(req.request.method).toBe('POST');

    req.flush(dummyHero);
  });

  it('should update an Hero', async () => {
    const dummyHero = dummyHeroes[0];
    const newHeroName = 'Hero 1 updated' as unknown as HeroName;
    dummyHero.name = newHeroName;

    service.update(dummyHero).subscribe((res) => {
      expect(res).toEqual(dummyHero);
    });

    const req = httpMock.expectOne(`${apiUrl}${dummyHero.id}`);

    expect(req.request.method).toBe('PUT');

    req.flush(dummyHero);
  });

  it('should delete an Hero', async () => {
    const dummyHero = dummyHeroes[0];
    service.delete(dummyHero.id).subscribe((res) => {
      expect(res).toEqual(dummyHero);
    });

    const req = httpMock.expectOne(`${apiUrl}${dummyHero.id}`);

    req.flush(dummyHero);
  });
});
