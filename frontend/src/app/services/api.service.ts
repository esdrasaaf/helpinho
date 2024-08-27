import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private http = inject(HttpClient);

  userSignUp(body: any) {
    return this.http.post('api/auth/signup', body);
  }

  userSignIn(body: any) {
    return this.http.post('api/auth/signin', body);
  }

  createHelp(body: any, token: string) {
    const headers = new HttpHeaders({
      Authorization: "Bearer " + token
    });

    const options = {
      headers: headers
    };

    return this.http.post('api/help/', body, options);
  }

  putHelp(body: any, token: string) {
    const headers = new HttpHeaders({
      Authorization: "Bearer " + token
    });

    const options = {
      headers: headers
    };

    return this.http.put('api/help/', body, options);
  }

  getAllHelps() {
    return this.http.get<any[]>('api/help/');
  }

  getByCategory(filter: string) {
    return this.http.get<any[]>('api/help/category/' + filter);
  }

  getById(filter: string) {
    return this.http.get<any[]>('api/help/id/' + filter);
  }

  getHealthInfo() {
    return this.http.get<any>('api/health');
  }
}