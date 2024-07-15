import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(username:string,password:string)
  {
    let body = {'username':username,'password':password};
    return this.http.post<any>("/api/auth/login",body);
  }

  requestFauslla()
  {
      return this.http.get("/api/auth/aaa");
  }
  logout()
  {
    localStorage.removeItem("token");
  }
}
