import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
  constructor(private http:HttpClient) { }

  login(username:string,password:string)
  {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    let body = {'username':username,'password':password};
    return this.http.post<any>("/api/auth/login",body);
  }

  register(username:string,password:string)
  {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    let body = {'username':username,'password':password};
    return this.http.post("/api/auth/register", body, {responseType: "text"}); //se un metodo rilasci testo non si mettono le angolari (.post<any>) ma si mette {responseType: "text"}
  }

  logout()
  {
    localStorage.clear();
  }

  isLogged(): boolean
  {
    if(localStorage.getItem("token"))
      return true;

    return false;
  }

  getUserRole()
  {
    return localStorage.getItem("role");
  }

  userHasRole(role: string)
  {
    return this.isLogged() && this.getUserRole() == role;
  }
}
