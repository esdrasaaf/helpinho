import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
})


export class CardComponent {
  cardInfo = input.required<cardHelp>();
}

type cardHelp = {
  title: string;
  description: string;
  category: string;
  background: string;
  author: {
    photo: string;
    email: string;
    name: string;
  };
  helpers: object[] | any;
}