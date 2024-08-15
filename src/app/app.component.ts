import { Component, HostListener, OnDestroy} from '@angular/core';
import { PlayerService } from './services/player.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{
  title = 'EverDominion';

  private playerId: number = parseInt(localStorage.getItem("id")!);

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void 
  {
    if(this.playerService.isLogged())
    {
      this.playerService.startHeartbeat(); 
      this.playerService.sendHeartbeat(this.playerId!).subscribe();

      console.log(this.playerId)
    }
  }

  ngOnDestroy(): void 
  {
    this.playerService.stopHeartbeat(this.playerId!);
  }

  // @HostListener('window:unload', [ '$event' ])
  // beforeUnloadHandler() 
  // {
  //   this.playerService.stopHeartbeat(this.playerId!);
  // }

  // @HostListener('window:beforeunload', [ '$event' ])
  // beforeUnloadHandler(event) {
  //   // ...
  // }
}