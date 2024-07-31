import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService 
{
  constructor(){}

  private data:{ name: string, value: any }[] = [];

  getData(name: string): any | null 
  {
    let item = this.data.find(element => element.name === name);

    return item ? item.value : null;
  }

  putData(name: string, value: any): void 
  {
    let item = this.data.find(element => element.name === name);

    if (item) 
      item.value = value;
    else 
      this.data.push({name, value});
  }
}
