import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateHero } from '@src/app/modules/heroes/application/update-hero';
import { HttpClientRepositoryService } from '@src/app/modules/heroes/infrastructure/repository/http-client-repository.service';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.component.html',
  styleUrls: ['./hero-edit.component.sass'],
})
export class HeroEditComponent implements OnInit {
  heroForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private HttpClientRepositoryService: HttpClientRepositoryService
  ) {}

  ngOnInit() {
    const heroData = this.route.snapshot.data?.['hero'];
    if (!heroData) {
      this.router.navigate(['/heroes']);
    }

    this.generateForm(heroData);
  }

  updateHero() {
    new UpdateHero(this.HttpClientRepositoryService)
      .execute(this.heroForm.value)
      .subscribe((res) => {
        this.router.navigate(['/heroes']);
      });
  }

  addPowerToHero(event: MatChipInputEvent): void {
    const value = event.value;

    this.powersOfHero.value.push(value);

    this.powersOfHero.updateValueAndValidity();

    event.chipInput!.clear();
  }

  remove(fruit: string): void {
    const index = this.powersOfHero.value.indexOf(fruit);
    this.powersOfHero.value.splice(index, 1);
    this.powersOfHero.updateValueAndValidity();
  }

  goBack() {
    this.location.back();
  }

  get powersOfHero(): FormArray {
    return this.heroForm.controls['powers'] as FormArray;
  }

  private generateForm(heroData: any) {
    this.heroForm = this.fb.group({
      id: this.fb.control(heroData.id),
      name: this.fb.control(heroData['name'], [
        Validators.required,
        Validators.minLength(3),
      ]),
      powers: this.fb.control(heroData['powers']),
    });
  }
}
