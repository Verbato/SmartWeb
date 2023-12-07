import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  register(): void {
    this.authService.register(this.username,  this.password).subscribe(
      (response) => {
        console.log('Registration successful', response);
        // Redirect or handle successful registration as needed
      },
      (error) => {
        console.error('Registration failed', error);
        // Handle registration failure
      }
    );
  }
}

