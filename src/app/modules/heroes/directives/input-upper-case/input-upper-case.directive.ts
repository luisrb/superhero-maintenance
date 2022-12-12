import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input[toUpperCase]'
})
export class InputUpperCaseDirective {
  constructor(private control: NgControl) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const str: string = this.control.value;

    if (this.control.control) this.control.control.setValue(str.toUpperCase());
  }
}
