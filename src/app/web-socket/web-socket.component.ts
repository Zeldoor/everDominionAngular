import { Component } from '@angular/core';
import { StompService } from '../services/stomp.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-web-socket',
  standalone: true,
  imports: [],
  templateUrl: './web-socket.component.html',
  styleUrl: './web-socket.component.css'
})
export class WebSocketComponent 
{
  constructor(private stompServ: StompService)
  {
    stompServ.subscribe("/topic/calza", (m) => console.log(m));
  }
}
