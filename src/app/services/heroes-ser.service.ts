import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Heroes } from '../modules/Heroes.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesSerService{

  listado_heroes:Heroes[]=[];

  getrecetas():Heroes[]{
    this.http.get<Heroes[]>("http://localhost:3000/heroes").subscribe(data=>{this.listado_heroes=data})
    return this.listado_heroes
  }



  constructor(private http:HttpClient, ) { }

}
