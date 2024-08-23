import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from '../model/Player';

@Component({
  selector: 'app-pve-fight-log',
  standalone: true,
  imports: [],
  templateUrl: './pve-fight-log.component.html',
  styleUrl: './pve-fight-log.component.css'
})
export class PveFightLogComponent 
{
  @Input() results !: string[];
  @Input() player!: Player;
  @Output() fightStart : EventEmitter<void> = new EventEmitter;

  constructor(){}

  fightButtonClicked(): void
  {
      this.fightStart.emit();
  }

  messageAlign(message: string) : string
  {
    return message.includes(this.player.nick + " ha") ? "flex-start" : "flex-end";
  }

  cssClass(message: string)
  {
    return message.includes(this.player.nick + " ha") ? "attackerStyle" : "defenderStyle";
  }
}
