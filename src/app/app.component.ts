import { Component } from '@angular/core';
import { PlayerService } from './services/player.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { StompService } from './services/stomp.service';
import { Player } from './model/Player';
import { HttpClient } from '@angular/common/http';
import { GearCardComponent } from "./gear-card/gear-card.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, GearCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{
  title = 'EverDominion';
  player!: Player;

  private playerId: number = parseInt(localStorage.getItem("id")!);

  constructor(private playerService: PlayerService, private stomp: StompService, private http:HttpClient) 
  {
    this.stomp.subscribe("/topic/players", message => 
      {
        let playersData = JSON.parse(message) as Player[];
        this.player = playersData ? playersData.filter(p => p.id == parseInt(localStorage.getItem("id")!)).at(0)! : this.player;
      })
  }

  ngOnInit(): void 
  {
    if(this.playerService.isLogged())
    {
      this.playerService.startHeartbeat(); 
      this.playerService.sendHeartbeat(this.playerId!).subscribe();
    }

    window.addEventListener("beforeunload", () => this.http.post(`api/player/${parseInt(localStorage.getItem("id")!)}/offline`, {}, {responseType: "text"}).subscribe());  //setta offline il player se chiude la pagina
  }

  ngOnDestroy(): void 
  {
    this.playerService.stopHeartbeat(this.playerId!);
  }

  // beforeUnloadHandler(event: BeforeUnloadEvent) 
  // {
  //   // this.playerService.stopHeartbeat(this.playerId!);
  //   this.http.get("api/player/test").subscribe()
  // }

  // @HostListener('window:beforeunload', [ '$event' ])
  // unloadHandler(event) 
  // {
  //   // ...
  // }
}