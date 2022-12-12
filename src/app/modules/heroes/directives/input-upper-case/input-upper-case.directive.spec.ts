import { Component } from '@angular/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgControl,
  ReactiveFormsModule
} from '@angular/forms';
import { By } from '@angular/platform-browser';
import { InputUpperCaseDirective } from './input-upper-case.directive';

describe('InputUpperCaseDirective', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [InputUpperCaseDirective, TestComponent],
      providers: [{ provide: NgControl, useValue: new FormControl() }]
    });
  });

  it('should create an instance', () => {
    const directive = InputUpperCaseDirective;
    expect(directive).toBeTruthy();
  });

  it('should transform value to uppercase', fakeAsync(() => {
    const textSended = 'Hello World';
    const textExpected = textSended.toUpperCase();

    const fixture = TestBed.createComponent(TestComponent);

    let input = fixture.debugElement.query(By.css('input')).nativeElement;

    fixture.detectChanges();
    tick();

    input.value = textSended;
    input.dispatchEvent(new Event('input'));
    tick();

    expect(input.value).toBe(textExpected);
  }));
});

@Component({
  template: ` <form [formGroup]="formGroup">
    <input formControlName="name" toUpperCase />
  </form>`
})
class TestComponent {
  private formGroup = new FormGroup<{
    name: FormControl;
  }>({
    name: new FormControl()
  });
}
