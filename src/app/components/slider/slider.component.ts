import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesSerService } from '../../services/heroes-ser.service';
import { Heroe } from '../../modules/Heroes.model';
import { register } from 'swiper/element/bundle';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SpinnerService } from '../../services/spinner.service';
// register Swiper custom elements
register()

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
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
    // this.spinerservice.llamarspinner();
  }

  constructor( private service:HeroesSerService, private spinerservice:SpinnerService){}

}
