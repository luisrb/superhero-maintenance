import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './ui/pages/heroes.component';
import { DialogDeleteHeroComponent } from './ui/components/dialog-delete-hero/dialog-delete-hero.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HeroSearcherComponent } from './ui/components/hero-searcher/hero-searcher.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroesTableComponent } from './ui/components/heroes-table/heroes-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { HeroesListComponent } from './ui/pages/heroes-list/heroes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientRepositoryService } from './infrastructure/repository/http-client-repository.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HeroCreateComponent } from './ui/pages/hero-create/hero-create.component';
import { MatChipsModule } from '@angular/material/chips';
import { HeroEditComponent } from './ui/pages/hero-edit/hero-edit.component';

@NgModule({
  declarations: [
    HeroesComponent,
    DialogDeleteHeroComponent,
    HeroSearcherComponent,
    HeroesTableComponent,
    HeroesListComponent,
    HeroCreateComponent,
    HeroEditComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Material
    MatDialogModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
  ],
  providers: [HttpClientRepositoryService, HttpClientModule],
})
export class HeroesModule {}
