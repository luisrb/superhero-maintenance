import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-searcher',
  templateUrl: './hero-searcher.component.html',
  styleUrls: ['./hero-searcher.component.sass'],
})
export class HeroSearcherComponent implements OnInit {
  @Output() search = new EventEmitter<string>();

  heroForm: FormGroup = new FormGroup({});

  formChanges!: Subscription;

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(''),
    });

    this.formChanges = this.heroForm.valueChanges.subscribe((search) =>
      this.search.emit(search.name)
    );
  }

  ngOnDestroy(): void {
    this.formChanges.unsubscribe();
  }
}
