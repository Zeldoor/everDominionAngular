import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Troop } from '../model/Troop';

@Injectable({
  providedIn: 'root'
})
export class PlayerService 
{

  constructor(private http: HttpClient){}
  
  fight(damage:number, health:number)
  {
    let body: Troop = {'className': 'Tank', 'damage':damage, 'health':health};

    return this.http.post<any>("/api/player/fight", body);
  }
}
