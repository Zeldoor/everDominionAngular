import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fight-result',
  standalone: true,
  imports: [],
  templateUrl: './fight-result.component.html',
  styleUrl: './fight-result.component.css'
})
export class FightResultComponent 
{
  @Input() result!: {win: boolean, gold: number};

  
}
