import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Troop } from '../model/Troop';

@Injectable({
  providedIn: 'root'
})
export class PlayerService 
{

  constructor(private http: HttpClient){}
  
  fight(damage:number, defence:number)
  {
    let body: Troop = {'className': 'Tank', 'damage':damage, 'defence':defence};

    return this.http.post<any>("/api/player/fight", body);
  }
}
