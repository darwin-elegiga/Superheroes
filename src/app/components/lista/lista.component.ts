import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Heroes } from '../../modules/Heroes.model';
import { HeroesSerService } from '../../services/heroes-ser.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {
  listado:Heroes[]=[];

  ngOnInit(): void {
    this.listado= this.service.getrecetas()
  }
  constructor( private service:HeroesSerService){}

}
