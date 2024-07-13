import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html'
})
export class TemplateDrivenFormComponent {
  responseMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.register(form.value).subscribe(
        response => {
          if (response.error) {
            this.errorMessage = response.message;
            this.responseMessage = '';
          } else {
            this.responseMessage = 'Registro exitoso!';
            this.errorMessage = '';
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
