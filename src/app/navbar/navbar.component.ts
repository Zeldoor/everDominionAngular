import { Component, Input } from '@angular/core';
import { Player } from '../model/Player';
import { LocalStorageService } from '../services/local-storage.service';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { StompService } from '../services/stomp.service';
import { GameDataService } from '../services/game-data.service';
import { CommonModule } from '@angular/common';
import { Notify } from '../model/Notify';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent 
{
  @Input() player!: Player;
  @Input() notify!: Notify;

  oldNotify!: Notify[];
  shieldVisibility: boolean =  false;
  timeRemaining: { hours: number, minutes: number, seconds: number } | null = null;
  private intervalId: any;

  constructor(public authService: AuthService){}

  checkNewNotify()
  {
    for(let note of this.oldNotify)
      if(note === this.notify)
      {

      }
      else
      {
        this.newNotify()
        this.oldNotify.push(this.notify);
      }
  }

  newNotify()
  {
  }

  logout()
  {
    this.authService.logout();
  }

  ngOnInit(): void 
  {
    this.updateTimeRemaining();

    this.intervalId = setInterval(() => 
    {
      this.updateTimeRemaining();
    }, 1000);
  }

  
  ngOnDestroy(): void 
  {
    if (this.intervalId) 
      clearInterval(this.intervalId);
  }
    

  private updateTimeRemaining(): void 
  {
    let shieldTime: Date | null = this.player ? new Date(this.player.shield.split(".")[0] as string) : null;

    if (!shieldTime) 
    {
      this.shieldVisibility = false;
      this.timeRemaining = { hours: 0, minutes: 0, seconds: 0 };
      return;
    }

    let currentDate = new Date();
    let timeDiff = shieldTime.getTime() - currentDate.getTime();

    if (timeDiff > 0) 
    {
      this.shieldVisibility = true;
      let hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      let seconds = Math.floor((timeDiff / 1000) % 60);

      this.timeRemaining = { hours, minutes, seconds };
    } 
    else 
    {
      this.shieldVisibility = false;
      this.timeRemaining = { hours: 0, minutes: 0, seconds: 0 };
      clearInterval(this.intervalId);
    }
  }
}
