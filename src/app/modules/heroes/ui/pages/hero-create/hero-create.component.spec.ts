import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroCreateComponent } from './hero-create.component';

describe('HeroCreateComponent', () => {
  let component: HeroCreateComponent;
  let fixture: ComponentFixture<HeroCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatChipsModule
      ],
      declarations: [HeroCreateComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with 2 elements', () => {
    expect(component).toBeTruthy();

    const form = fixture.nativeElement.querySelector('form');
    expect(form).toBeTruthy();

    const name = fixture.nativeElement.querySelector(
      'input[formcontrolname="name"]'
    );
    expect(name).toBeTruthy();

    const powers = fixture.nativeElement.querySelector(
      'mat-chip-grid[formcontrolname="powers"]'
    );
    expect(powers).toBeTruthy();
  });

  it('should dont send invalid form', () => {
    const button = fixture.debugElement.query(
      (debugEl) =>
        debugEl.name === 'button' &&
        debugEl.nativeElement.textContent.toLowerCase() === 'guardar'
    );

    expect(button).toBeTruthy();

    expect(button.nativeElement.disabled).toBeTruthy();

    expect(component.heroForm.valid).toBeFalsy();
  });

  it('should send valid form', () => {
    spyOn(component, 'createHero').and.returnValue();

    component.heroForm.controls['name'].setValue('Hero 1');
    component.heroForm.controls['powers'].setValue(['power 1']);

    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();

    button.click();

    expect(component.heroForm.valid).toBeTruthy();
  });
});
