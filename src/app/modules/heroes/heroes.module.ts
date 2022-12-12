import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './ui/pages/heroes.component';
import { DialogDeleteHeroComponent } from './ui/components/dialog-delete-hero/dialog-delete-hero.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    HeroesComponent,
    DialogDeleteHeroComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,

    // Material
    MatDialogModule,
  ],
})
export class HeroesModule {}
