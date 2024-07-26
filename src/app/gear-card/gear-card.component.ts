import { Component } from '@angular/core';
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
  mockGear: Gear[] = [];

  constructor()
  {
    let gear: Gear = {id: 1, name: "Collana bella", description: "-10 Intelletto / +5 SWAG", price: 150}
    let gear2: Gear = {id: 1, name: "Ciabatta infradito", description: "-7 Surriscaldamento", price: 80}
    let gear3: Gear = {id: 1, name: "Peli di barba", description: "belli lunghi", price: 20}

    this.mockGear.push(gear)
    this.mockGear.push(gear2)
    this.mockGear.push(gear3)
  }
}
