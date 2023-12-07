import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Login successful', response);
        // Redirect or handle successful login as needed
      },
      (error) => {
        console.error('Login failed', error);
        // Handle login failure
      }
    );
  }
}
