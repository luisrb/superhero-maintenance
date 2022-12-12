import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Hero } from '@app/modules/heroes/domain/hero';
import { HeroesTableComponent } from './heroes-table.component';

describe('HeroesTableComponent', () => {
  const dummyHeroes = [
    {
      id: '059f7287-c555-443d-a066-330644dbbb12',
      name: 'Hero 1',
      powers: ['power 1']
    },
    {
      id: 'f312d2ce-2bbc-4416-b81e-80f43f52c70d',
      name: 'Hero 2',
      powers: ['power 2', 'power 3']
    }
  ] as unknown as Hero[];
  let component: HeroesTableComponent;
  let fixture: ComponentFixture<HeroesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatPaginatorModule,
        RouterModule,
        MatTableModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        MatIconModule
      ],
      declarations: [HeroesTableComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create with subComponents', () => {
    expect(component).toBeTruthy();

    const table = fixture.nativeElement.querySelector('table');
    expect(table).toBeTruthy();

    const paginator = fixture.nativeElement.querySelector('mat-paginator');
    expect(paginator).toBeTruthy();
  });

  it('should have a table with 2 elements', async () => {
    component.heroes = dummyHeroes;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const table = fixture.nativeElement.querySelector('table');
      expect(table).toBeTruthy();

      // Number of rows
      const rows = table.querySelectorAll('tbody tr[role="row"]');
      expect(rows.length).toBe(dummyHeroes.length);

      // Number of columns in Header
      const columns = table.querySelectorAll('thead tr th');
      expect(columns.length).toBe(component.displayedColumns.length);
    });
  });
});
