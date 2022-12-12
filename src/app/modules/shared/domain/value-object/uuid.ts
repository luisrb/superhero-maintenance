import { v4 as uuid, validate as uuidValidate } from 'uuid';
import { InvalidArgumentError } from './invalid-argument-error';

export class Uuid extends String {
  constructor(value: string) {
    super(value);
    this.ensureIsValidUuid(value);
  }

  static random(): Uuid {
    return new Uuid(uuid());
  }

  private ensureIsValidUuid(id: string): void {
    if (!uuidValidate(id)) {
      throw new InvalidArgumentError(
        `<${this.constructor.name}> does not allow the value <${id}>`
      );
    }
  }
}
