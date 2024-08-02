import { Component, inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Player } from '../model/Player';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { hasValidPassword } from '../services/validators/hasValidPassword';
import { CommonModule } from '@angular/common';
import { profanityFilter } from '../services/validators/profanityFilter';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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
  usernameTakenMessage: string = "";

  registerForm()
  {
    this.loginState = !this.loginState
    this.loginState ? this.newUserForm.get('email')?.setValue("") : this.newUserForm.get('email')?.setValue(null)
  }

  newUserForm = new FormGroup(
    {
      email: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required, profanityFilter()]),
      password: new FormControl("", [Validators.required, hasValidPassword()]),
    }
  )

  oldUserForm = new FormGroup(
    {
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
    }
  )


  login()
  {
    let username = this.oldUserForm.get('username')?.value;
    let password = this.oldUserForm.get('password')?.value;

    this.authService.login(username!, password!).subscribe(
      {
        next: data =>
        {
          data.user.role = data.role;
          this.player = data.playerDto;

          this.webStorage.setItem("token", data.accessToken);
          this.webStorage.setItem("role", data.role);
          this.webStorage.setItem("user", data.user);
          this.webStorage.setItem("username", data.user.username);
          this.webStorage.setItem("id", data.playerDto.id);

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
    let username = this.newUserForm.get('username')?.value;
    let email = this.newUserForm.get('email')?.value;
    let password = this.newUserForm.get('password')?.value;

    this.authService.register(username!, password!, email!).subscribe(
      {
        next: data=>
        {
          this.login();
        },
        error: err=>
        {
          localStorage.clear();

          console.log(err)

          if(err.error.includes("Email"))
            this.newUserForm.get('email')?.setErrors({emailTaken: err.error});
          else
            this.newUserForm.get('username')?.setErrors({usernameTaken: err.error});
        }
      }
    )
  }
}
