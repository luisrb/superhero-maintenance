import { Hero } from '@src/app/modules/heroes/domain/hero';
import { HeroName } from '@src/app/modules/heroes/domain/value-objects/hero-name';
import { HeroPowers } from '@src/app/modules/heroes/domain/value-objects/hero-powers';
import { HeroRepository } from '../domain/repository/hero-repository';

export class CreateHero {
  constructor(private repository: HeroRepository) {}

  execute(props: { name: HeroName; powers: HeroPowers }) {
    const heroItem = Hero.create(props.name, props.powers);
    return this.repository.save(heroItem);
  }
}
