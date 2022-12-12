import { HeroRepository } from '../domain/repository/hero-repository';
import { HeroId } from '../domain/value-objects/hero-id';

export class DeleteHero {
  constructor(private repository: HeroRepository) {}

  execute(id: HeroId) {
    return this.repository.delete(id);
  }
}
