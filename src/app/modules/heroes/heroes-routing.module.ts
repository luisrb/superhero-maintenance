import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './ui/pages/heroes.component';
import { HeroesListComponent } from './ui/pages/heroes-list/heroes-list.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesComponent,
    children: [
       { path: '', component: HeroesListComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
