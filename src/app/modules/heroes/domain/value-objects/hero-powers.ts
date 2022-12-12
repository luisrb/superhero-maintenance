import { InvalidArgumentError } from '@src/app/modules/shared/domain/value-object/invalid-argument-error';

export class HeroPowers extends Array {
  private regex = /[0-9a-zA-Z]{3,}/;

  constructor(value: string[]) {
    super();
    this.ensureIsArrayValid(value);
  }

  private ensureIsArrayValid(powers: string[]): void {
    if (this.isArrayOfStrings(powers)) {
      throw new InvalidArgumentError(
        `<${this.constructor.name}> does not allow the value <${powers}> this needs an array of strings`
      );
    }
  }

  private isArrayOfStrings(powers: string[]): boolean {
    return (
      Array.isArray(powers) && powers.every((power) => this.regex.exec(power))
    );
  }
}
