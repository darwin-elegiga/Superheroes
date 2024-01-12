import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroesSerService } from '../../services/heroes-ser.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Heroe } from '../../modules/Heroes.model';

@Component({
  selector: 'app-modificar',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css'
})
export class ModificarComponent implements OnInit{

heroe:Heroe=new Heroe();
id:number=0;
ima:string='';

modHeroe=new FormGroup({
  'superhero':new FormControl('',Validators.required),
  'publisher':new FormControl(''),
  'alter_ego':new FormControl(''),
  'first_appearance':new FormControl(''),
  'characters':new FormControl(''),
  'imagen':new FormControl(''),


});
get superhero(){
  return this.modHeroe.get("superhero") as FormControl
}
get publisher(){
  return this.modHeroe.get("publisher") as FormControl
}
get alter_ego(){
  return this.modHeroe.get("alter_ego") as FormControl
}
get first_appearance(){
  return this.modHeroe.get("first_appearance") as FormControl
}
get characters(){
  return this.modHeroe.get("characters") as FormControl
}
get imagen(){
  return this.modHeroe.get("imagen") as FormControl
}



  eliminar(){
    this.servicio.eliminar(this.heroe.id,this.id)
    this.servicio.home()
  }

  publicar(){
    this.heroe.superhero=this.superhero.value;
    this.heroe.alter_ego=this.alter_ego.value;
    this.heroe.characters=this.characters.value;
    this.heroe.first_appearance=this.first_appearance.value;
    this.heroe.publisher=this.publisher.value;
    this.heroe.imagen=this.ima;
    alert(this.heroe.superhero)
    this.servicio.putHeroe(this.heroe.id,this.heroe)
    this.servicio.home();
  }

  constructor(private route:ActivatedRoute, private servicio:HeroesSerService, private sanitizer:DomSanitizer){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.heroe= this.servicio.arrayheroe[this.id]

    this.superhero.setValue(this.heroe.superhero);
    this.publisher.setValue(this.heroe.publisher);
    this.alter_ego.setValue(this.heroe.alter_ego);
    this.first_appearance.setValue(this.heroe.first_appearance);
    this.characters.setValue(this.heroe.characters);
    this.imagen.setValue(this.heroe.imagen);

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
