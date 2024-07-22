import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerService } from './services/player.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'EverDominion';
  constructor(private service: PlayerService){}

  

  damage : number = 0;
  defence : number = 0;
  result : string = "Match"
  

  fight()
  {
    this.service.fight(this.damage, this.defence).subscribe(
      res => this.result = res.result
    );
  }
}
