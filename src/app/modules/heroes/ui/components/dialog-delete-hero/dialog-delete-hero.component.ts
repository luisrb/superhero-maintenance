import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '@src/app/modules/heroes/domain/hero';

@Component({
  selector: 'app-dialog-delete-hero',
  templateUrl: './dialog-delete-hero.component.html',
  styleUrls: ['./dialog-delete-hero.component.sass']
})
export class DialogDeleteHeroComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDeleteHeroComponent>,
    @Inject(MAT_DIALOG_DATA) public hero: Hero
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
