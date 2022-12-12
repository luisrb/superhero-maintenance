import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroId } from '@src/app/modules/heroes/domain/value-objects/hero-id';
import { environment } from '@src/environments/environment';
import { Observable } from 'rxjs';
import { Hero } from '../../domain/hero';
import { HeroRepository } from '../../domain/repository/hero-repository';

@Injectable({
  providedIn: 'root'
})
export class HttpClientRepositoryService implements HeroRepository {
  private apiUrl = environment.apiUrl + 'data/';

  constructor(private httpClient: HttpClient) {}

  save(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(`${this.apiUrl}`, hero);
  }

  searchAll(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.apiUrl);
  }

  searchById(id: HeroId): Observable<Hero> {
    return this.httpClient.get<Hero>(`${this.apiUrl}${id}`);
  }

  update(hero: Hero): Observable<Hero> {
    return this.httpClient.put<Hero>(`${this.apiUrl}${hero.id}`, hero);
  }

  delete(id: HeroId): Observable<Hero> {
    return this.httpClient.delete<Hero>(`${this.apiUrl}${id}`);
  }
}
