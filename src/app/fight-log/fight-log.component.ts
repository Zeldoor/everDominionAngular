import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fight-log',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fight-log.component.html',
  styleUrl: './fight-log.component.css'
})
export class FightLogComponent 
{
  @Input() results !: string[];

  @Output() fightStart : EventEmitter<void> = new EventEmitter;

  fightButtonClicked(): void
  {
      this.fightStart.emit();
  }

  messageAlign(message: string) : string
  {
    return message.includes("You dealt") ? "flex-end" : "flex-start";
  }

  cssClass(message: string)
  {
    return message.includes("You dealt") ? "attackerStyle" : "defenderStyle";
  }
}
