import { Heroe } from './../../modules/Heroes.model';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesSerService } from '../../services/heroes-ser.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalles2',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './detalles2.component.html',
  styleUrl: './detalles2.component.css'
})
export class Detalles2Component implements OnInit {
  id:string="";
  heroe:Heroe=new Heroe();
  get(){
    var obs$;
    obs$=this.servicio.getheroeid(this.id).subscribe(data=>{this.heroe=data});
  }
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.get()
  }
  constructor(private servicio:HeroesSerService,private route:ActivatedRoute){}

}
