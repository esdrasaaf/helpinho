import { Component, inject } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { InputComponent } from "../../components/input/input.component";
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CarouselComponent, InputComponent, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
})

export class RegisterComponent {
  router = inject(Router);
  api = inject(ApiService);

  registerForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    cpf: new FormControl<string>('',  [Validators.required, Validators.pattern("[0-9]+"), Validators.minLength(11)]),
    number: new FormControl<string>('', [Validators.required, Validators.pattern("[0-9]+"), Validators.minLength(11)]),
    password: new FormControl<string>('', [Validators.required, Validators.pattern("([a-zA-Z]+[0-9]|[0-9]+[a-zA-Z])[a-zA-Z0-9]*"), Validators.minLength(8)]),
  })

  
  onSubmit() {
    const isFormValid = this.registerForm.valid
    
    if (isFormValid) {
      const body = {
        name: this.registerForm.controls.name.value,
        email: this.registerForm.controls.email.value,
        cpf: this.registerForm.controls.cpf.value,
        number: this.registerForm.controls.number.value,
        password: this.registerForm.controls.password.value,
      }
  
      this.api.userSignUp(body).subscribe(() => {
        this.router.navigateByUrl("/login");
      })
    } else {
      console.log('deu errado')
    }
  }
}
