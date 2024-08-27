import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
})
export class InputComponent {
  //Signals
  label = input<string>('');
  type = input<string>('');
  placeholder = input<string>('');
  width = input<string>('');
  hint = input<string>('');
  heigth = input<string>('');
  controlName = input<any>('');
}
