import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { HeaderComponent } from "../../components/header/header.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from "../../components/input/input.component";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, InputComponent],
  templateUrl: './item.component.html',
})
export class ItemComponent {
  api = inject(ApiService);
  router = inject(Router);
  userData = inject(AuthService);
  helpId: string | null = null;
  constructor(private route: ActivatedRoute) {}
  helpsData = signal<any>({});

  ngOnInit(): void {
    this.helpId = this.route.snapshot.paramMap.get('id');
    
    if(this.helpId) {
      this.api.getById(this.helpId as string).subscribe({
        next: (res) => { this.helpsData.set(res); console.log(res) }
      })
    } else {
      this.router.navigateByUrl('/');
    }
  }

  donateForm = new FormGroup({
    value: new FormControl<number>(0, [Validators.required]),
  })

  //Add donation
  onSubmit() {
    console.log(this.donateForm.controls.value.value)

    if (this.donateForm.valid) {
      const body = {
        value: this.donateForm.controls.value.value,
        helpId: this.helpId
      };
  
      const token = this.userData.userData()?.token as string
  
      this.api.putHelp(body, token).subscribe(() => {
        this.router.navigateByUrl("/");
      })
    }
  }
}