import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Hero } from '@src/app/modules/heroes/domain/hero';

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.sass']
})
export class HeroesTableComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<Hero>([]);

  displayedColumns: string[] = ['id', 'name', 'powers', 'actions'];

  @Input()
  set heroes(value: Hero[]) {
    this.dataSource.data = value;
  }

  @Output()
  deleteHero = new EventEmitter<Hero>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteItem(hero: Hero) {
    this.deleteHero.emit(hero);
  }
}
