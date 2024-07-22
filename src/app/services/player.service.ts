import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService 
{

  constructor(private http: HttpClient){}
  
  fight(damage:number, defence:number)
  {
    let body = {'damage':damage,'defence':defence};

    return this.http.post<any>("/api/player/fight", body);
  }
}
