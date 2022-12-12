import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from '@src/app/modules/shared/services/loader/loader.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  color = 'primary';

  isLoading = false;

  loaderSubscription = new Observable<boolean>();

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderSubscription = this.loaderService.isLoading;

    this.loaderSubscription.subscribe((value) => {
      this.isLoading = value;
    });
  }

  ngOnDestroy() {
    this.loaderService.isLoading.unsubscribe();
  }
}
