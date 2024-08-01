import { Component, inject} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Player } from '../model/Player';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { hasValidPassword } from '../services/validators/hasValidPassword';
import { CommonModule } from '@angular/common';

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
  formPasswordError: string = "";

  registerForm()
  {
    this.loginState = !this.loginState
  }

  userForm = new FormGroup(
    {
      email: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, hasValidPassword()]),
      dob: new FormControl("", [Validators.required]),
    }
  )

  // FORM DI ESEMPIO SU COME USARE I VALIDATORI
  
  // gradeForm:FormGroup = new FormGroup(
  //   {
  //     day: new FormControl('',[Validators.required,notFutureDateValidation()]),
  //     subject: new FormControl('',[Validators.required,Validators.minLength(3)]),
  //     teacherName: new FormControl('',[Validators.required]),
  //     teacherSurname: new FormControl('',[Validators.required]),
  //     value: new FormControl(6,[Validators.required])
  //   }
  // );
  

  login()
  {
    let email = this.userForm.get('email')?.value;
    let password = this.userForm.get('password')?.value;

    this.authService.login(email!, password!).subscribe(
      {
        next: data =>
        {
          data.user.role = data.role;
          this.player = data.playerDto;

          this.webStorage.setItem("token", data.accessToken);
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
    let email = this.userForm.get('email')?.value;
    let password = this.userForm.get('password')?.value;

    this.authService.register(username!, password!, email!).subscribe(
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
