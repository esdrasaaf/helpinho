import { Component, inject } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { InputComponent } from "../../components/input/input.component";
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CarouselComponent, InputComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
})

export class LoginComponent {
  router = inject(Router);
  api = inject(ApiService);
  auth = inject(AuthService);

  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.pattern("([a-zA-Z]+[0-9]|[0-9]+[a-zA-Z])[a-zA-Z0-9]*"), Validators.minLength(8)]),
  })
  
  onSubmit() {
    const isFormValid = this.loginForm.valid

    if (isFormValid) {
      const body = {
        email: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value,
      }
  
      this.api.userSignIn(body).subscribe((res) => {
        this.auth.setLogin(res);
        this.router.navigateByUrl("/");
      })
    }
  }
}
