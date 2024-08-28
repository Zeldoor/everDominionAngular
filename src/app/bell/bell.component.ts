import { Component, Injector } from '@angular/core';
import { Notify } from '../model/Notify';
import SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

@Component({
  selector: 'app-bell',
  standalone: true,
  imports: [],
  templateUrl: './bell.component.html',
  styleUrl: './bell.component.css'
})
export class BellComponent 
{
  notifications: Notify[] = [];

  constructor(private injector: Injector)
  {
    this.initializeWebSocketConnection();

    this.subscribe(`/topic/notify/${parseInt(localStorage.getItem("id")!)}`, message => 
      {
        console.log("SONO NELLA NAVBAR")
        let notify = JSON.parse(message) as Notify;
        this.notifications.push(notify);
      })
  }

  private socket: any;
  private stompClient: any;


  initializeWebSocketConnection(): void {
    this.socket = new SockJS('http://localhost:8080/websocket'); //mappatura in spring
    this.stompClient = Stomp.over(this.socket);

    this.stompClient.debug = null;

    const _this = this;
    this.stompClient.connect({}, function (frame: any) {
      // console.log('Connected: ' + frame);
    }, function(error: any) {
      console.error('Error: ' + error);
    });
  }

  subscribe(topic: string, callback: (message: any) => void): void {
    const _this = this;
    if (this.stompClient.connected) {
      this.subscribeToTopic(topic, callback);
    } else {
      this.stompClient.connect({}, function () {
        _this.subscribeToTopic(topic, callback);
      });
    }
  }

  private subscribeToTopic(topic: string, callback: (message: any) => void): void {
    this.stompClient.subscribe(topic, (message: any) => {
      // console.log('Received message: ' + message.body);
      callback(message.body);
    });
  }

  send(destinazione: string, playload: string)
  {
    this.stompClient.publish({destinazione: "/ws/"+destinazione, body: playload})
  }
}
