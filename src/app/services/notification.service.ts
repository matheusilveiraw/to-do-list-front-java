import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Notification {
  type: 'success' | 'error';
  message: string;
  autoClose?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<Notification | null>(null);
  notification$ = this.notificationSubject.asObservable();

  showSuccess(message: string) {
    this.notificationSubject.next({ type: 'success', message, autoClose: true });
  }

  showError(message: string) {
    this.notificationSubject.next({ type: 'error', message, autoClose: false });
  }

  clear() {
    this.notificationSubject.next(null);
  }
}
