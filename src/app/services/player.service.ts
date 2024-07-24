import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Troop } from '../model/Troop';
import { Fight } from '../model/Fight';

@Injectable({
  providedIn: 'root'
})
export class PlayerService 
{

  constructor(private http: HttpClient){}
  
  fightTEST(damage:number, health:number)
  {
    let body: Troop = {className: 'Tank', damage: damage, health: health};

    return this.http.post<any>("/api/player/fight", body);
  }

  fight(body: Fight)
  {
    return this.http.post<any>("/api/player/fight", body); //deve mandare un FightDTO
  }
}
