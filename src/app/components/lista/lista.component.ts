import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Heroe } from '../../modules/Heroes.model';
import { HeroesSerService } from '../../services/heroes-ser.service';
import { Observable } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FindPipe } from '../pipes/find.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FindPipe,FormsModule,NgxPaginationModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {
  p:number=1
  listado:Heroe[]=[];
  modificar:string="modificar"
  nombre:string=''

  get(){
    var obs$;
    obs$=this.service.getrecetas().subscribe(data=>{this.listado=data})
  }
  ngOnInit(): void {
    this.get()
  }
  constructor( private service:HeroesSerService){}

}
