import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Heroe } from '../../modules/Heroes.model';
import { HeroesSerService } from '../../services/heroes-ser.service';
import { Observable } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {
  listado:Heroe[]=[];
  modificar:string="modificar"

  get(){
    var obs$;
    obs$=this.service.getrecetas().subscribe(data=>{this.listado=data})
  }
  ngOnInit(): void {
    this.get()
  }
  constructor( private service:HeroesSerService){}

}
