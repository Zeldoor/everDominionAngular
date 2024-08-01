import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TroopInShop } from '../model/TroopInShop';
import { Observable } from 'rxjs';
import { Gear } from '../model/Gear';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient){}

  getShopTroop(): Observable<TroopInShop[]>
  {
    return this.http.get<TroopInShop[]>("/api/shop/troops");
  }

  getShopGear(): Observable<Gear[]>
  {
    return this.http.get<Gear[]>("/api/shop/gears");
  }
}
