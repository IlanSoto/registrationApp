import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html'
})
export class ModelDrivenFormComponent {
  registrationForm: FormGroup;
  responseMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.userService.register(this.registrationForm.value).subscribe(
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
