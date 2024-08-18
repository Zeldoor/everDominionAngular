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
}