import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class AuthService {
    //Get info on local storage
    private stringInfo = localStorage.getItem("userData") as string;

    //User data variable
    userData = signal<UserData | null>(JSON.parse(this.stringInfo));
  
    //Set info on local storage
    setLogin(res?: any) {
      if (res) {
        localStorage.setItem("userData", JSON.stringify(res));
        this.userData.set(res);
      }
    }

    //Is Auth??
    checkAuthentication(): boolean {
      const info = localStorage.getItem("userData") as string;
      const data: UserData = JSON.parse(info);

      if(data?.token) {
        return true
      } else {
        return false
      }
    }
}

export type UserData = {
    user: {
        name: string,
        email: string,
        image: string,
    },
    token: string;
}