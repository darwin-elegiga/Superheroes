import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { HeroesSerService } from '../../services/heroes-ser.service';
import { Heroe } from '../../modules/Heroes.model';

@Component({
  selector: 'app-adicionar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './adicionar.component.html',
  styleUrl: './adicionar.component.css'
})
export class AdicionarComponent {
  superhero:string=''
  publisher:string=''
  alter_ego:string=''
  first_appearance:string=''
  characters:string=''
  imagen:string=''


  constructor(  private sanitizer:DomSanitizer, private servicio:HeroesSerService){
  }

  publicar(){
    var nuevoheroe:Heroe=new Heroe("",this.superhero,this.publisher,this.alter_ego,this.first_appearance,this.characters,this.ima);
    this.servicio.postHeroe(nuevoheroe);
    this.servicio.home();
  }
  ima:string="";
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
