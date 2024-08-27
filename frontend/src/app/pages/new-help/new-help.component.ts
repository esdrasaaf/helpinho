import { Component, computed, inject, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from "../../components/header/header.component";
import { InputComponent } from '../../components/input/input.component';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-new-help',
  standalone: true,
  imports: [HeaderComponent, InputComponent, ReactiveFormsModule],
  templateUrl: './new-help.component.html',
})

export class NewHelpComponent {
  router = inject(Router);
  api = inject(ApiService);
  userData = inject(AuthService);

  //Step 1 infos
  category = signal('');

  //Step 2 infos
  helpForm = new FormGroup({
    title: new FormControl<string>('', [Validators.required, Validators.maxLength(100)]),
    image: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required, Validators.maxLength(500)]),
  })

  //Step 3 infos
  totalValue = signal(0);

  //Create new help card
  onSubmit() {
    const isFormValid = this.helpForm.valid
    if (isFormValid) {
      const body = {
        title: this.helpForm.controls.title.value,
        background: this.helpForm.controls.image.value,
        description: this.helpForm.controls.description.value,
        totalValue: this.totalValue(),
        category: this.category()
      }

      const token = this.userData.userData()?.token as string

      this.api.createHelp(body, token).subscribe(() => {
        this.router.navigateByUrl("/");
      })
    }
  }

  stepNumber = signal(0);
  actualStep = computed(() => this.stepInfos[this.stepNumber()]);
  
  stepInfos = [
    {
      image: "icon1.png",
      title: "Categoria do helpinho",
      description: "Em que categoria se encaixa seu helpinho?",
      text: 'Escolha pelo menos uma das categorias abaixo que represente mais o seu helpinho.'
    },
    {
      image: "icon2.png",
      title: "Conhecendo o helpinho",
      description: "Fale um pouco mais",
      text: 'Diga as pessoas mais detalhes dobre helpinho, não economize nas palavras.'
    },
    {
      image: "icon3.png",
      title: "Metas do helpinho",
      description: "Quanto você precisa?",
      text: 'Defina a meta que você quer alcançar com seu helpinho'
    },
    {
      image: "check2.png",
      title: "Revisando",
      description: "Falta pouco...",
      text: 'Revise se seu helpinho está como você gostaria antes de publica-lo para todos.'
    },
  ]
  
  categories = [
    {
      name: "Games",
      icon: "testeImage.jpg",
    },
    {
      name: "Health",
      icon: "testeImage.jpg",
    },
    {
      name: "Book",
      icon: "testeImage.jpg",
    },
  ]

  helpValues = [100, 1000, 5000, 10000, 20000, 50000]

  nextStep = () => {
    if(this.category() === '') {console.log('seleciona uma categoria aí vey'); return};
    if(this.category() !== '' && !this.helpForm.valid && this.stepNumber() === 1) {console.log('pô, faz o formulario'); return};
    if(this.category() !== '' && this.helpForm.valid && this.totalValue() === 0 && this.stepNumber() === 2) {console.log('escolhe o valor mano'); return};

    if (this.stepNumber() < this.stepInfos.length - 1) {
      this.stepNumber.update(n => n + 1);
    } else {
      this.onSubmit();
    }
  }

  previusStep = () => {
    if (this.stepNumber() > 0) {
      this.stepNumber.update(n => n - 1);
    } else {
      this.router.navigateByUrl("/");
    }
  }
}