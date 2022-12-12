import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { CreateHero } from '@src/app/modules/heroes/application/create-hero';
import { HttpClientRepositoryService } from '@src/app/modules/heroes/infrastructure/repository/http-client-repository.service';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.component.html',
  styleUrls: ['./hero-create.component.sass'],
})
export class HeroCreateComponent implements OnInit {
  heroForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private HttpClientRepositoryService: HttpClientRepositoryService
  ) {}

  ngOnInit() {
    this.generateForm();
  }

  createHero() {
    new CreateHero(this.HttpClientRepositoryService)
      .execute(this.heroForm.value)
      .subscribe((res) => {
        this.router.navigate(['/heroes']);
      });
  }

  addPowerToHero(event: MatChipInputEvent): void {
    const value = event.value;

    this.heroes.value.push(value);

    this.heroes.updateValueAndValidity();

    event.chipInput!.clear();
  }

  remove(fruit: string): void {
    const index = this.heroes.value.indexOf(fruit);
    this.heroes.value.splice(index, 1);
    this.heroes.updateValueAndValidity();
  }

  goBack() {
    this.router.navigate(['/heroes']);
  }

  get heroes(): FormArray {
    return this.heroForm.controls['powers'] as FormArray;
  }

  private generateForm() {
    this.heroForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      powers: this.fb.control([]),
    });
  }
}
