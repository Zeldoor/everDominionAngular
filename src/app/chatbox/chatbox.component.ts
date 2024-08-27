import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.css'
})
export class ChatboxComponent {

  popup : string = "";
  messages : string[]=[];
  constructor()
  {
    
    this.messages = ["weo", "miao","sambucone","AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaaaaaaaaaaaa"];
  }

  toggle()
  {
    if(this.popup=="")
      this.popup="visibility";
    else
      this.popup="";
  }

  visibility(): String
  {

    return this.popup;
  }

  alignMessages() : string
  {
    if (this.messages.length==15) 
    {
      return "messaggio"
    }
    else
    {
      return "messaggio-user"
    }
  }

}
