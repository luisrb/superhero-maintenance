import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroSearcherComponent } from '@src/app/modules/heroes/ui/components/hero-searcher/hero-searcher.component';
import { Hero } from '../../../domain/hero';
import { HeroesTableComponent } from '../../components/heroes-table/heroes-table.component';
import { HeroesListComponent } from './heroes-list.component';

describe('HeroesListComponent', () => {
  const dummyHeroes = [
    {
      id: '059f7287-c555-443d-a066-330644dbbb12',
      name: 'Hero 1',
      powers: ['power 1'],
    },
    {
      id: 'f312d2ce-2bbc-4416-b81e-80f43f52c70d',
      name: 'Hero 2',
      powers: ['power 2', 'power 3'],
    },
  ] as unknown as Hero[];

  let component: HeroesListComponent;
  let fixture: ComponentFixture<HeroesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        MatIconModule,
        MatTableModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatInputModule,
      ],
      declarations: [
        HeroesListComponent,
        HeroSearcherComponent,
        HeroesTableComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create with subComponents', () => {
    expect(component).toBeTruthy();

    const heroSearcher =
      fixture.nativeElement.querySelector('app-hero-searcher');
    expect(heroSearcher).toBeTruthy();

    const heroesTable = fixture.nativeElement.querySelector('app-heroes-table');
    expect(heroesTable).toBeTruthy();
  });
});
