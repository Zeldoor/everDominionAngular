import { Component, Input } from '@angular/core';
import { Troop } from '../model/Troop';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-troop-card-idle',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './troop-card-idle.component.html',
  styleUrl: './troop-card-idle.component.css'
})
export class TroopCardIdleComponent 
{
  @Input() troop!:Troop;
  
  
//   constructor() {
//     // Wait for the DOM to be fully loaded before running this
//     document.addEventListener("DOMContentLoaded", () => {
//         var x = document.getElementById('cont');
//         if (x) {
//             // Check if `this.troop` is properly initialized
//             if (this.troop && this.troop.className === "knight") {
//                 x.style.backgroundImage = "url(https://i.imgur.com/JKzHY0e.png)";
//             } else {
//                 x.style.backgroundImage = "url(https://i.imgur.com/t7A4csn.png)";
//             }
//         } else {
//             console.error("Element with id 'cont' not found.");
//         }
//     });
// }

  setSprite(): string
  {
    return this.troop.className.toLocaleLowerCase().includes("knight") ? "https://i.imgur.com/fA62hrl.gif" : "https://i.imgur.com/RP0AmLf.gif";
  }

  setBackground(): string
  {
    return this.troop.className.toLocaleLowerCase().includes("knight") ?  'url("https://i.imgur.com/JKzHY0e.png")' : 'url("https://i.imgur.com/QxuxL0Y.png")';
  }
}
