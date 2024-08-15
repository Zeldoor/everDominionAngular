import { Component, Input } from '@angular/core';
import { Gear } from '../model/Gear';

@Component({
  selector: 'app-gear-card',
  standalone: true,
  imports: [],
  templateUrl: './gear-card.component.html',
  styleUrl: './gear-card.component.css'
})
export class GearCardComponent 
{
  @Input() gear!: Gear;
}