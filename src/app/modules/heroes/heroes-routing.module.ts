import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './ui/pages/heroes.component';
import { HeroesListComponent } from './ui/pages/heroes-list/heroes-list.component';
import { HeroDetailResolver } from './resolvers/hero-detail/hero-detail.resolver';
import { HeroCreateComponent } from './ui/pages/hero-create/hero-create.component';
import { HeroEditComponent } from './ui/pages/hero-edit/hero-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    children: [
      { path: '', component: HeroesListComponent },
      { path: 'create', component: HeroCreateComponent },
      {
        path: 'edit/:id',
        component: HeroEditComponent,
        resolve: { hero: HeroDetailResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
