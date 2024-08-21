import { Component, HostListener, Input } from '@angular/core';
import { Gear } from '../model/Gear';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-gear-card',
  standalone: true,
  imports: [MatGridListModule, NgStyle],
  templateUrl: './gear-card.component.html',
  styleUrl: './gear-card.component.css'
})
export class GearCardComponent 
{
  @Input() gear!: Gear;

  mouseX: number = 0;
  mouseY: number = 0;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void 
  {
    this.mouseX = event.clientX+5;
    this.mouseY = event.clientY+5;
  }

  setDescription(): String
  {
    switch(this.gear.name)
    {
      case "ANELLO":
        return this.gear.tier ? ("+"+10*this.gear.tier+" "+this.gear.description) : ("+ 10 "+this.gear.description);

      case "PUGNALE":
        return this.gear.tier ? ("+"+4*this.gear.tier+" "+this.gear.description) : ("+ 4 "+this.gear.description);

      case "TIARA":
        return this.gear.tier ? ("+"+2*this.gear.tier+" "+this.gear.description) : ("+ 2 "+this.gear.description);

      case "COLLANA":
        return this.gear.tier ? ("+"+5*this.gear.tier+" "+this.gear.description) : ("+ 5 "+this.gear.description);

      default: 
        return "NaN"
    }
  }
}