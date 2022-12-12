import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteHero } from '@src/app/modules/heroes/application/delete-hero';
import { SearchAll } from '@src/app/modules/heroes/application/search-all-heroes';
import { Hero } from '@src/app/modules/heroes/domain/hero';
import { HttpClientRepositoryService } from '@src/app/modules/heroes/infrastructure/repository/http-client-repository.service';
import { DialogDeleteHeroComponent } from '@src/app/modules/heroes/ui/components/dialog-delete-hero/dialog-delete-hero.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.sass'],
})
export class HeroesListComponent implements OnInit {
  originalData: Hero[] = [];
  dataFiltered: Hero[] = [];

  constructor(
    public dialog: MatDialog,
    private HttpClientRepositoryService: HttpClientRepositoryService
  ) {}

  ngOnInit() {
    this.getHeroes().subscribe((heroes) => {
      this.originalData = heroes;
      this.dataFiltered = heroes;
    });
  }

  openDialogDeleteHero(hero: Hero) {
    const dialogRef = this.dialog.open(DialogDeleteHeroComponent, {
      width: 'auto',
      data: { ...hero },
    });

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.removeHero(result);
        }
      },
    });
  }

  inputFilterChanges(event: string) {
    const filterValue = event.trim().toLowerCase();
    this.dataFiltered = this.originalData.filter(
      (hero) =>
        hero.name.toString().toLowerCase().includes(filterValue) ||
        hero.powers
          .map((_) => _.toLowerCase())
          .some((t) => t.includes(filterValue))
    );
  }

  removeHero(hero: Hero) {
    new DeleteHero(this.HttpClientRepositoryService)
      .execute(hero.id)
      .pipe(switchMap(() => this.getHeroes()))
      .subscribe((heroes) => {
        this.originalData = heroes;
        this.dataFiltered = heroes;
      });
  }

  getHeroes() {
    return new SearchAll(this.HttpClientRepositoryService).execute();
  }
}
