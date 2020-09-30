import { Injectable } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  $notifications = new Subject();
  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) { }

  getAllQuestions() {
    return this.apiService.get('/questions');
  }

  getNotifications() {
    const user = this.authService.user;
    let params = {};
    if(user && user._id) {
      params = {
        userId: user._id
      };
    }
    return this.apiService.get('/users/notifications', {params});
  }

  async fetchNotifications() {
    interval(6 * 1000)
      .pipe(
        flatMap(() => this.getNotifications())
      )
      .subscribe(data => this.$notifications.next(data))
  }
}
