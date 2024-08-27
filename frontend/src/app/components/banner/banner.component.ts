import { Component, inject, input } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './banner.component.html',
})
export class BannerComponent {
  api = inject(AuthService);
  isAuth = false;
  userData = this.api.userData();

  ngOnInit() {
    const value = this.api.checkAuthentication();
    this.isAuth = value;
  }
}
