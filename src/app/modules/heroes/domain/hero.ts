import { HeroId } from '@src/app/modules/heroes/domain/value-objects/hero-id';
import { HeroName } from '@src/app/modules/heroes/domain/value-objects/hero-name';
import { HeroPowers } from '@src/app/modules/heroes/domain/value-objects/hero-powers';

export interface HeroInterface {
  id: HeroId;
  name: HeroName;
  powers: HeroPowers;
}

export class Hero implements HeroInterface {
  id: HeroId;
  name: HeroName;
  powers: HeroPowers;

  constructor(props: HeroInterface) {
    this.id = props.id;
    this.name = props.name;
    this.powers = props.powers;
  }

  static create(name: HeroName, powers: HeroPowers): Hero {
    const id = HeroId.random();

    return new Hero({
      id,
      name,
      powers
    });
  }
}
