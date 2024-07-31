import { Component, inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Player } from '../model/Player';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent 
{
  constructor(private authService:AuthService, private router: Router)
  {
    if(localStorage.getItem("token"))
      this.router.navigate(["home"])
    else
      localStorage.clear();
  }

  webStorage = inject(LocalStorageService);

  loginState: boolean = true;
  player !: Player;

  registerForm()
  {
    this.loginState = !this.loginState
  }

  userForm = new FormGroup(
    {
      email: new FormControl(""),
      username: new FormControl(""),
      password: new FormControl(""),
      dob: new FormControl(""),
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
          data.user.role = data.role;
          this.player = data.playerDto;

          this.webStorage.setItem("token", data.accessToken);
          this.webStorage.setItem("role", data.role);
          this.webStorage.setItem("user", data.user);
          this.webStorage.setItem("player", data.playerDto);

          this.router.navigate(["home"])
        },
        error: err=>
        {
          localStorage.clear();
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
          localStorage.clear();
        }
      }
    )
  }
}
