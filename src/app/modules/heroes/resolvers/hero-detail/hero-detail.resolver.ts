import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { SearchById } from '@src/app/modules/heroes/application/search-hero-by-id';
import { HeroId } from '@src/app/modules/heroes/domain/value-objects/hero-id';
import { HttpClientRepositoryService } from '@src/app/modules/heroes/infrastructure/repository/http-client-repository.service';
import { catchError, map, Observable, of } from 'rxjs';
import { validate as uuidValidate } from 'uuid';
import { Hero } from '../../domain/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroDetailResolver implements Resolve<Hero | null> {
  constructor(
    private router: Router,
    private HttpClientRepositoryService: HttpClientRepositoryService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Hero | null> {
    let id = route.paramMap.get('id');

    if (!id || !uuidValidate(id)) {
      console.log('%c Invalid Id 😢', 'color:red;font-size: 30px');

      this.router.navigate(['/']);
      return of(null);
    }

    return this.getHeroById(id);
  }

  getHeroById(id: string): Observable<Hero | null> {
    return new SearchById(this.HttpClientRepositoryService)
      .execute(new HeroId(id))
      .pipe(
        map((res) => {
          if (!res) {
            this.router.navigate(['/']);
            return null;
          }
          return res;
        }),
        catchError((err) => {
          console.log('%c Hero does not exist 😢', 'color:red;font-size: 30px');
          this.router.navigate(['/']);
          return of(null);
        })
      );
  }
}
