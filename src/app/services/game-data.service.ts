import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription, BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameDataService implements OnDestroy 
{
  private subscription!: Subscription;
  private uri!: string;
  private gameDataSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  startPolling(uri: string): Observable<any> 
  {
    this.uri = uri;

    if (!this.subscription) 
        this.subscription = interval(5000).pipe(
        switchMap(() => this.fetchGameData())
        ).subscribe(data => 
        {
          this.gameDataSubject.next(data);
        });

    return this.gameDataSubject.asObservable();
  }

  fetchGameData(): Observable<any> 
  {
    if (this.uri) 
      return this.http.get<any>('/api/'+this.uri);

    return new Observable<any>(); // Ritorna un Observable vuoto se URI non è definito
  }

  ngOnDestroy() 
  {
    if (this.subscription) 
      this.subscription.unsubscribe();
  }
}