import { Component, inject, Injector, Input, OnInit } from '@angular/core';
import { StompService } from '../services/stomp.service';
import { Player } from '../model/Player';

@Component({
  selector: 'app-notify',
  standalone: true,
  imports: [],
  templateUrl: './notify.component.html',
  styleUrl: './notify.component.css'
})
export class NotifyComponent implements OnInit
{
  stomp: StompService;

  @Input() player!: Player;

  constructor(private injector: Injector)
  {
    this.stomp = this.injector.get(StompService);
  }

  ngOnInit()
  {
    let url: string = `/topic/notify/`+parseInt(localStorage.getItem("id")!);

    this.stomp.subscribe(url, (message) => {console.log(message)});
  }
}
