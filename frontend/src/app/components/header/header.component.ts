import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService, UserData } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  api = inject(AuthService);
  router = inject(Router);
  isAuth = false;
  userData = this.api.userData();

  ngOnInit() {
    const value = this.api.checkAuthentication();
    this.isAuth = value;
  }

  logout() {
    localStorage.removeItem('userData');
    this.router.navigateByUrl("/login");
  }
}
