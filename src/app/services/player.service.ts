import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fight } from '../model/Fight';
import { Player } from '../model/Player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService 
{

  constructor(private http: HttpClient){}
  
  fight(body: Fight): Observable<Fight>
  {
    return this.http.post<Fight>("/api/player/fight", body); 
  }

  getAll(): Observable<Player[]>
  {
    return this.http.get<Player[]>("/api/player");
  }
  
  getOne(id:number): Observable<any>
  {
    return this.http.get<Player>(`/api/player/${id}`);
  }

  insert(body:Player): Observable<Player>
  {
    return this.http.post<Player>("/api/player", body);
  }
}
