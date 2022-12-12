import { HeroId } from '@src/app/modules/heroes/domain/value-objects/hero-id';
import { Observable } from 'rxjs';
import { Hero } from '../hero';

export interface HeroRepository {
  save(hero: Hero): Observable<Hero>;
  update(hero: Hero): Observable<Hero>;
  delete(id: HeroId): Observable<Hero>;
  searchAll(): Observable<Hero[]>;
  searchById(id: HeroId): Observable<Hero>;
}
