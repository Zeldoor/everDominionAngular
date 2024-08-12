import { Component} from '@angular/core';
import { PlayerService } from './services/player.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { WebSocketComponent } from './web-socket/web-socket.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, WebSocketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'EverDominion';

  private playerId: number = parseInt(localStorage.getItem("id")!);
  private heartbeatSubscription!: Subscription;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void 
  {
    if(this.playerService.isLogged())
    {
      this.playerService.startHeartbeat(); 
      this.playerService.sendHeartbeat(this.playerId!).subscribe();
    }
  }

  ngOnDestroy(): void 
  {
    this.playerService.stopHeartbeat(this.playerId!);
  }

 
}
