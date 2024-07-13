import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  responseMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService) {}

  onLogin(form: NgForm) {
    if (form.valid) {
      this.userService.login(form.value.email, form.value.password).subscribe(
        response => {
          if (response.success) {
            this.responseMessage = response.message;
            this.errorMessage = '';
          } else {
            this.responseMessage = '';
            this.errorMessage = response.message;
          }
        },
        error => {
          this.responseMessage = '';
          this.errorMessage = 'Error desconocido. Por favor, inténtalo de nuevo.';
        }
      );
    }
  }
}
