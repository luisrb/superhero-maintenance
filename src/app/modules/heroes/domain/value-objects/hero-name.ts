import { InvalidArgumentError } from '@src/app/modules/shared/domain/value-object/invalid-argument-error';
import { ValueObject } from '@src/app/modules/shared/domain/value-object/value-object';

export class HeroName extends ValueObject<String> {
  private regex = /[0-9a-zA-Z]{3,}/;

  constructor(value: string) {
    super(value);
    this.ensureIsStringValid(value);
  }

  private ensureIsStringValid(name: string): void {
    if (this.regex.exec(name)) {
      throw new InvalidArgumentError(
        `<${this.constructor.name}> does not allow the value <${name}> this needs at least 3 characters`
      );
    }
  }
}
