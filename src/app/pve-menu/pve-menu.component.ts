import { Component } from '@angular/core';
import { PvePlayer } from '../model/PvePlayer';
import { PveService } from '../services/pve.service';

@Component({
  selector: 'app-pve-menu',
  standalone: true,
  imports: [],
  templateUrl: './pve-menu.component.html',
  styleUrl: './pve-menu.component.css'
})
export class PveMenuComponent 
{
  pvePlayers: PvePlayer[] = [];

  constructor(private pveServ: PveService)
  {
    this.pveServ.getAllPve().subscribe( data => this.pvePlayers = data);
  }

  

}
