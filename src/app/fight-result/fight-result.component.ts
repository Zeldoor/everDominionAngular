import { Component, inject, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-fight-result',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './fight-result.component.html',
  styleUrl: './fight-result.component.css'
})
export class FightResultComponent 
{
  @Input() gold!: number;
  @Input() victory!:boolean;
  router: Router = inject(Router)
  
  homeButton()
  {
    this.router.navigate(["home"])
  }

}
