import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  showSuccessNotification(notificationMessage: string, buttonText: string) {
    this.snackBar.open(notificationMessage, buttonText, {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: 'success',
    });
  }

  showRemovedNotification(notificationMessage: string, buttonText: string) {
    this.snackBar.open(notificationMessage, buttonText, {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: 'error',
    });
  }
}
