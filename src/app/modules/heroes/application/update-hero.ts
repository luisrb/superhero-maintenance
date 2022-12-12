import { HeroId } from '@src/app/modules/heroes/domain/value-objects/hero-id';
import { HeroName } from '@src/app/modules/heroes/domain/value-objects/hero-name';
import { HeroPowers } from '@src/app/modules/heroes/domain/value-objects/hero-powers';
import { Hero } from '../domain/hero';
import { HeroRepository } from '../domain/repository/hero-repository';

export class UpdateHero {
  constructor(private repository: HeroRepository) {}

  execute(props: { name: HeroName; powers: HeroPowers; id: HeroId }) {
    const heroItem = new Hero({ ...props });
    return this.repository.update(heroItem);
  }
}
