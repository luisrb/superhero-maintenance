import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SpyLocation } from '@angular/common/testing';
import { tick } from '@angular/core/testing';
import { FormArray, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroEditComponent } from './hero-edit.component';

describe('HeroEditComponent', () => {
  let component: HeroEditComponent;
  let fixture: ComponentFixture<HeroEditComponent>;
  let location: SpyLocation;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatChipsModule,
        MatIconModule,
        RouterTestingModule
      ],
      declarations: [HeroEditComponent],
      providers: [
        routeDataProvider,
        {
          provide: Location,
          useClass: SpyLocation
        }
      ]
    }).compileComponents();

    location = TestBed.get(Location);
    fixture = TestBed.createComponent(HeroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a power', () => {
    const fnFormPowers = component.heroForm.get('powers') as FormArray<any>;

    spyOnProperty(component, 'powersOfHero').and.returnValue(fnFormPowers);

    component.addPowerToHero({
      value: 'power test',
      chipInput: {
        clear: () => {}
      }
    } as MatChipInputEvent);

    expect(component.heroForm.value.powers).toEqual([
      'power 1',
      'power 2',
      'power test'
    ]);
  });

  it('should remove a power', () => {
    const fnFormPowers = component.heroForm.get('powers') as FormArray<any>;

    spyOnProperty(component, 'powersOfHero').and.returnValue(fnFormPowers);

    component.heroForm.value.powers = [component.heroForm.value.powers[0]];

    expect(component.heroForm.value.powers).toEqual(['power 1']);
  });

  it('should go back', () => {
    spyOn(location, 'back');
    component.goBack();
    expect(location.back).toHaveBeenCalled();
  });

  it('should dont save invalid form', fakeAsync(() => {
    component.heroForm.patchValue({
      name: '',
      powers: []
    });

    fixture.detectChanges();
    tick();

    const button = fixture.debugElement.query(
      (debugEl) =>
        debugEl.name === 'button' &&
        debugEl.nativeElement.textContent.toLowerCase() === 'guardar'
    );

    expect(button).toBeTruthy();

    expect(button.nativeElement.disabled).toBeTruthy();

    expect(component.heroForm.valid).toBeFalsy();
  }));
});

const routeDataProvider = {
  provide: ActivatedRoute,
  useValue: {
    snapshot: {
      data: {
        hero: {
          id: 1,
          name: 'Test Hero',
          powers: ['power 1', 'power 2']
        }
      }
    }
  }
};
