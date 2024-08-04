import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fight } from '../model/Fight';
import { Player } from '../model/Player';
import { interval, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService 
{
  constructor(private http: HttpClient){}

  public playerId: number = parseInt(localStorage.getItem("id")!);
  private heartbeatSubscription!: Subscription;
  
  fight(body: Fight): Observable<Fight>
  {
    return this.http.post<Fight>("/api/player/fight", body); 
  }

  getAll(): Observable<Player[]>
  {
    return this.http.get<Player[]>("/api/player");
  }
  
  getOne(id:number): Observable<Player>
  {
    return this.http.get<Player>(`/api/player/${id}`);
  }

  insert(body:Player): Observable<Player>
  {
    return this.http.post<Player>("/api/player", body);
  }

  switchTroopState(troopId:number): Observable<Player>
  {
    return this.http.post<Player>(`/api/player/switch`, troopId);
  }

  addFriend(id:number, playerId:number): Observable<Player>
  {
    return this.http.post<Player>(`/api/player/add/${id}`, playerId);
  }

  getOnlineFriends(playerId: number): Observable<Player[]> 
  {
    return this.http.get<Player[]>(`api/player/${playerId}/online-friends`);
  }

  getAllFriends(playerId: number): Observable<Player[]> 
  {
    return this.http.get<Player[]>(`$api/player/${playerId}/friends`);
  }

  sendHeartbeat(playerId: number): Observable<void> 
  {
    return this.http.post<void>(`api/player/${playerId}/heartbeat`, {});
  }

  sendPlayerOffline(playerId: number): void 
  {
    console.log(playerId);
    this.http.get(`api/player/${playerId}/offline`);
  }

  startHeartbeat(): void 
  {
    if(this.playerId)
      this.heartbeatSubscription = interval(2000).subscribe(() =>  // 3 mins
      {
        this.sendHeartbeat(this.playerId).subscribe();
        console.log("PLAYER ONLINE");
      });
    // else
    //   this.sendPlayerOffline(this.playerId)

  }

  stopHeartbeat(playerId: number): void 
  {
    if (this.heartbeatSubscription)
    {
      this.heartbeatSubscription.unsubscribe();
      this.sendPlayerOffline(playerId)
      console.log("PLAYER OFFLINE")
    }
  }
}
