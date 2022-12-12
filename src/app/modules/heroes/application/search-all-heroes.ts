import { Observable } from 'rxjs';
import { Hero } from '../domain/hero';
import { HeroRepository } from '../domain/repository/hero-repository';

export class SearchAll {
  constructor(private repository: HeroRepository) {}

  execute(): Observable<Hero[]> {
    return this.repository.searchAll();
  }
}
