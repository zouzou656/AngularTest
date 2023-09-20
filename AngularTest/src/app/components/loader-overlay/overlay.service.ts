import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoaderOverlayComponent } from './loader-overlay.component';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  private dialogRef!: MatDialogRef<LoaderOverlayComponent>;

  constructor(private dialog: MatDialog) {}

  open(): void {
    if (!this.dialogRef) {
      this.dialogRef = this.dialog.open(LoaderOverlayComponent, {
        panelClass: 'overlay-dialog',
        disableClose: true,
      });
    }
  }

  close(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
