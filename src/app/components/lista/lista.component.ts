import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Heroe } from '../../modules/Heroes.model';
import { HeroesSerService } from '../../services/heroes-ser.service';
import { Observable } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FindPipe } from '../pipes/find.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetallesComponent } from '../detalles/detalles.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { BuscadorComponent } from '../buscador/buscador.component';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FindPipe,FormsModule,NgxPaginationModule, DetallesComponent, BuscadorComponent,NgxUiLoaderModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {
  p:number=1
  listado:Heroe[]=[];
  modificar:string="modificar";
  nombre:string='';
  details:boolean=false;
  buscator:boolean=false;
  indice:number=0;
  detalleHeroe:Heroe=new Heroe();
  position:number=0;
  get(){
    var obs$;
    obs$=this.service.getheroe().subscribe(data=>{this.listado=data})
  }
  ngOnInit(): void {
    this.get()
  }
  mouseover(indice:number,posicion:number){
    this.detalleHeroe=this.listado[indice];
    this.position=posicion;
    this.details=true;
  }

  receptora(evento:boolean){this.buscator=evento}
  constructor( private service:HeroesSerService){}

}
