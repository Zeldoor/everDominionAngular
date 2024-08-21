import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PvePlayer } from '../model/PvePlayer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PveService 
{
  constructor(private http: HttpClient) { }

  getAllPve(): Observable<PvePlayer[]>
  {
    return this.http.get<PvePlayer[]>("/api/pve");
  }
  
  getOnePve(id:number): Observable<PvePlayer>
  {
    return this.http.get<PvePlayer>(`/api/pve/${id}`);
  }
}
