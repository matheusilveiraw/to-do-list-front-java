import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notification: any = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notification$.subscribe((notif) => {
      this.notification = notif;
      if (notif?.autoClose) {
        setTimeout(() => this.closeNotification(), 3000);
      }
    });
  }

  closeNotification() {
    this.notificationService.clear();
  }
}
