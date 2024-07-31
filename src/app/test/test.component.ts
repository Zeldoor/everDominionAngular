import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent 
{
  loginForm:FormGroup = new FormGroup(
    {
      email: new FormControl(''),
      password: new FormControl('')
    }
  )

  regForm:FormGroup = new FormGroup(
    {
      name : new FormControl(''),
      surname : new FormControl(''),
      dob: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    }
  );


  test(): void
  {
    this.loginForm.get('email')?.setValue(this.regForm.get('email')?.value);
  }
}
