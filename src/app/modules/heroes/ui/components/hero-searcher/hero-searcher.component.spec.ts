import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroSearcherComponent } from './hero-searcher.component';

describe('HeroSearcherComponent', () => {
  let component: HeroSearcherComponent;
  let fixture: ComponentFixture<HeroSearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [HeroSearcherComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a search input', () => {
    const input = fixture.nativeElement.querySelector('input');
    expect(input.placeholder).toBe('Busca un Héroe');
    expect(input).toBeTruthy();
  });

  it('should return to output attribute the value of the input', () => {
    const testValue = 'my input value';

    spyOn(component.search, 'emit');

    const input = fixture.debugElement.query(By.css('input'));

    input.nativeElement.value = testValue;

    input.nativeElement.dispatchEvent(new Event('input'));

    expect(component.search.emit).toHaveBeenCalled();
    expect(component.search.emit).toHaveBeenCalledWith(testValue);
  });
});
