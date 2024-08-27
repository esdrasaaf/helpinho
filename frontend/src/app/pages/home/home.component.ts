import { Component, inject, signal } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { HeaderComponent } from "../../components/header/header.component";
import { InputComponent } from "../../components/input/input.component";
import { CardComponent } from '../../components/card/card.component';
import { UrgentCardComponent } from "../../components/urgent-card/urgent-card.component";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, HeaderComponent, InputComponent, CardComponent, UrgentCardComponent],
  templateUrl: './home.component.html',
})

export class HomeComponent {
  service = inject(AuthService);
  api = inject(ApiService);
  router = inject(Router);
  isAuth = false;
  isFiltered = "";
  helpsArray = signal<any[]>([]);
  categories = ["Games", "Health", "Book"]

  ngOnInit() {
    const value = this.service.checkAuthentication();
    this.isAuth = value;

    this.api.getAllHelps().subscribe({
      next: (res) => { this.helpsArray.set(res); console.log(res) }
    })
  }

  redirectTo(id: string) {
    this.router.navigateByUrl('/item/' + id);
  }

  filterHelps(filter: string) {
    this.api.getByCategory(filter).subscribe({
      next: (res) => { this.helpsArray.set(res); console.log(res) }
    })
  }
}
