import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesSerService } from '../../services/heroes-ser.service';
import { Heroe } from '../../modules/Heroes.model';
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';
import { FormsModule } from '@angular/forms';
// register Swiper custom elements
register()

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderComponent implements OnInit{
  listado:Heroe[]=[];
indice:number=0;

  get(){
    var obs$;
    obs$=this.service.getheroe().subscribe(data=>{this.listado=data})
  }
  ngOnInit(): void {
    this.get()
  }

  constructor( private service:HeroesSerService){}

}
