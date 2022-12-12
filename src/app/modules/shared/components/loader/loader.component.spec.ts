import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatProgressSpinnerModule],
      declarations: [LoaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a div with class loader', () => {
    component.isLoading = true;
    fixture.detectChanges();

    const div = fixture.nativeElement.querySelector('div.overlay');

    expect(div).toBeTruthy();
  });

  it('should dont show loader', () => {
    expect(component).toBeTruthy();

    const div = fixture.nativeElement.querySelector('div.overlay');

    expect(div).toBeFalsy();
  });
});
