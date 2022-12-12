import { HeroId } from '@src/app/modules/heroes/domain/value-objects/hero-id';
import { Observable } from 'rxjs';
import { Hero } from '../domain/hero';
import { HeroRepository } from '../domain/repository/hero-repository';

export class SearchById {
  constructor(private repository: HeroRepository) {}

  execute(id: HeroId): Observable<Hero> {
    return this.repository.searchById(id);
  }
}
