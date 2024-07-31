import { Component, inject, Inject } from '@angular/core';
import { User } from '../model/User';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Player } from '../model/Player';
import { SharedService } from '../services/shared.service';

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
  sharedServ = inject(SharedService);

  loginState: boolean = true;
  player !: Player;

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
          localStorage.setItem("role", data.user.role);
          this.player = data.playerDto;

          this.sharedServ.putData("user", data.user);
          this.sharedServ.putData("player", data.playerDto);

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
