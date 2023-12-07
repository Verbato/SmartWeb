import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SmartWeb';
  constructor(private authService: AuthService) {}

  logout(): void {
    // Call the logout method from your AuthService
    this.authService.logout();
    // You might also want to navigate the user to the login page or perform other actions
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
