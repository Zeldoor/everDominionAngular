import { Component } from '@angular/core';
import { User } from '../model/User';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Player } from '../model/Player';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent 
{
  constructor(private authService:AuthService){}

  loginState: boolean = true;
  player !: Player;
  user: User = {email: "", password: "", roles: ["GUEST"]};

  registerForm()
  {
    this.loginState = !this.loginState
  }

  userForm = new FormGroup(
    {
      username: new FormControl(""),
      password: new FormControl(""),
    }
  )
  

  login()
  {
    let username = this.userForm.get('username')?.value;
    let password = this.userForm.get('password')?.value;

    this.authService.login(username!, password!).subscribe(
      {
        next: data =>
        {
          localStorage.setItem("token", data.accessToken);
          localStorage.setItem("role", data.role);
          this.player = data.playerDto;

          console.log(this.player);
        },
        error: err=>
        {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
        }
      }
    )
  }

  logout()
  {
    this.authService.logout();
  }

  register()
  {
    let username = this.userForm.get('username')?.value;
    let password = this.userForm.get('password')?.value;

    this.authService.register(username!, password!).subscribe(
      {
        next: data=>
        {
          this.login();
          console.log(this.player);
        },
        error: err=>
        {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
        }
      }
    )
  }
}
