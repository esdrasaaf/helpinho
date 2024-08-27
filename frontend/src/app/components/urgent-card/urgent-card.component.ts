import { Component, input } from '@angular/core';

@Component({
  selector: 'app-urgent-card',
  standalone: true,
  imports: [],
  templateUrl: './urgent-card.component.html',
})
export class UrgentCardComponent {
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