import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './ui/pages/heroes.component';
import { DialogDeleteHeroComponent } from './ui/components/dialog-delete-hero/dialog-delete-hero.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HeroSearcherComponent } from './ui/components/hero-searcher/hero-searcher.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeroesComponent,
    DialogDeleteHeroComponent,
    HeroSearcherComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Material
    MatDialogModule,
    MatFormFieldModule,
  ],
})
export class HeroesModule {}
