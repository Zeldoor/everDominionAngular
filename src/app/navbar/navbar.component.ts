import { Component, Input } from '@angular/core';
import { Player } from '../model/Player';
import { LocalStorageService } from '../services/local-storage.service';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { PlayerService } from '../services/player.service';
import { StompService } from '../services/stomp.service';
import { GameDataService } from '../services/game-data.service';
import { CommonModule } from '@angular/common';

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
  shieldVisibility: boolean =  false;

  timeRemaining: { hours: number, minutes: number, seconds: number } | null = null;
  shield_expire!: Date; 
  currentDate: Date = new Date();
  private intervalId: any;

  constructor(public authService: AuthService, private stomp: StompService, private polling: GameDataService){} 

  ngOnInit(): void 
  {
    // this.polling.startPolling(`/player/${this.player.id || 0}`, 5000)
    // .subscribe(
    //   {
    //     next: data =>
    //     {
    //       this.player = data as Player ? data : this.player;
    //       this.icon = this.player ? this.player.icon : 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png';

    //       this.shield_expire = new Date(this.player.shield.split(".")[0] as string);
    //     },
    //     error: err =>
    //     {
    //       console.log("ERRORE")
    //     }
    //   }
    // )
    

    // this.stomp.subscribe("/topic/players", message => 
    //   {
    //     let playersData = JSON.parse(message) as Player[];
    //     this.player = playersData ? playersData.filter(p => p.id == parseInt(localStorage.getItem("id")!)).at(0)! : this.player;
    //     this.icon = this.player ? this.player.icon : 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png';

    //     this.shield_expire = new Date(this.player.shield.split(".")[0] as string);
    //   })

    this.updateTimeRemaining();

    this.intervalId = setInterval(() => 
    {
      this.updateTimeRemaining();
    }, 1000);
  }

  
  ngOnDestroy(): void 
  {
    if (this.intervalId) 
    {
      clearInterval(this.intervalId);
    }
  }


    
  logout()
  {
    this.authService.logout();
  }

  private updateTimeRemaining(): void 
  {
    if (!this.shield_expire) 
    {
      this.shieldVisibility = false;
      this.timeRemaining = { hours: 0, minutes: 0, seconds: 0 };
      return;
    }

    let currentDate = new Date();
    let timeDiff = this.shield_expire.getTime() - currentDate.getTime();

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
