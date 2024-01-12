import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroesSerService } from '../../services/heroes-ser.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Heroe } from '../../modules/Heroes.model';

@Component({
  selector: 'app-modificar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css'
})
export class ModificarComponent implements OnInit{

heroe:Heroe=new Heroe();


id:number=0;
ima:string='';
superhero:string="";
publisher:string="";
alter_ego:string="";
first_appearance:string="";
characters:string="";
imagen:string="";

  eliminar(){
    this.servicio.eliminar(this.heroe.id,this.id)
    this.servicio.home()
  }



  constructor(private route:ActivatedRoute, private servicio:HeroesSerService, private sanitizer:DomSanitizer){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.heroe= this.servicio.arrayheroe[this.id]

    this.superhero=this.heroe.superhero;
    this.publisher=this.heroe.publisher;
    this.alter_ego=this.heroe.alter_ego;
    this.first_appearance=this.heroe.first_appearance;
    this.characters=this.heroe.characters;
    this.imagen=this.heroe.imagen;

  }




  subir(event:any):any{
    // console.log(event.target.files);
    const archivocapturado =event.target.files[0];
    this.extraer(archivocapturado).then((image:any) =>{
      this.ima=image.base
      console.log(image)

    });

  }

  extraer=async ($event:any) => new Promise((resolve, reject) => {
    try{
        const unsafeImg =window.URL.createObjectURL($event);
        const image =this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        reader.readAsDataURL($event);

        reader.onload =() =>{
          resolve({
            base:reader.result
          })
        }

        reader.onerror =error=>{
          resolve({
            base:null
          });
        };
    } catch(e){
      return
    }
  })

}
