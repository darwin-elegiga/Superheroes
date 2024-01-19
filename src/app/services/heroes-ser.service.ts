import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Heroe } from '../modules/Heroes.model';
import { Observable } from 'rxjs';
import { Router, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeroesSerService{
  arrayheroe:Heroe[]=[];
  peticion:any;
  getheroe():Observable<Heroe[]>{
    var obs$=this.http.get<Heroe[]>("http://localhost:3000/heroes");
    obs$.subscribe(data=>{this.arrayheroe=data})

    return obs$

  }
  getheroeid(id:string):Observable<Heroe>{
    var x:string="http://localhost:3000/heroes/"+id;

    var obs$=this.http.get<Heroe>(x);
    return obs$

  }
  postHeroe(heroe:Heroe){
    this.http.post("http://localhost:3000/heroes",{
      id:Number,
      superhero:heroe.superhero,
      publisher:heroe.publisher,
      alter_ego:heroe.alter_ego,
      first_appearance:heroe.first_appearance,
      characters:heroe.characters,
      imagen:heroe.imagen
    }).subscribe(data=>{this.peticion});
    return this.peticion
  }
  eliminar(id:string,position:number){
    var x:string="http://localhost:3000/heroes/"+id;
    this.http.delete(x).subscribe(data=>{this.peticion=data});
    this.arrayheroe.splice(position,1)
  }
  putHeroe(id:string,heroe:Heroe):void{

    var x:string="http://localhost:3000/heroes/"+id;
    this.http.put(x,
    {
    "id":"",
     "superhero":heroe.superhero,
     "publisher":heroe.publisher,
     "alter_ego":heroe.alter_ego,
     "first_appearance":heroe.first_appearance,
     "characters":heroe.characters,
     "imagen":heroe.imagen,

    }
    ).subscribe(data=>{this.peticion=data;});}

  heroeone:Heroe=new Heroe();



  home(){
    this.router.navigate([''])
  }
  slider(){
    this.router.navigate(['slider'])
  }
  lista(){
    this.router.navigate(['lista'])
  }
  constructor(private http:HttpClient,private router:Router  ) { }

}
