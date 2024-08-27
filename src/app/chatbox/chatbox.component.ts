import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.css'
})
export class ChatboxComponent 
{
  popup : String = "";
  messages : String[] = [];
  
  toggle(): void
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

}
