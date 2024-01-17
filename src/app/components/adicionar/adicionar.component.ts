import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { HeroesSerService } from '../../services/heroes-ser.service';
import { Heroe } from '../../modules/Heroes.model';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-adicionar',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './adicionar.component.html',
  styleUrl: './adicionar.component.css'
})
export class AdicionarComponent {
  addHeroe=new FormGroup({
    'superhero':new FormControl('',Validators.required),
    'publisher':new FormControl(''),
    'alter_ego':new FormControl(''),
    'first_appearance':new FormControl(''),
    'characters':new FormControl(''),
    'imagen':new FormControl(''),


  });
  get superhero(){
    return this.addHeroe.get("superhero") as FormControl
  }
  get publisher(){
    return this.addHeroe.get("publisher") as FormControl
  }
  get alter_ego(){
    return this.addHeroe.get("alter_ego") as FormControl
  }
  get first_appearance(){
    return this.addHeroe.get("first_appearance") as FormControl
  }
  get characters(){
    return this.addHeroe.get("characters") as FormControl
  }
  get imagen(){
    return this.addHeroe.get("imagen") as FormControl
  }



  constructor(  private sanitizer:DomSanitizer, private servicio:HeroesSerService){
  }

  publicar(){
    var nuevoheroe:Heroe=new Heroe("",this.superhero.value,this.publisher.value,this.alter_ego.value,this.first_appearance.value,this.characters.value,this.ima);

    Swal.fire({
      title: 'Esta seguro que desea agregar el heroe?',
      showDenyButton: true,
      showCancelButton: true,
      showCloseButton:true,
      confirmButtonText: 'SÍ',
      denyButtonText: `NO`,


    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Agregado!', '', 'success');
        this.servicio.postHeroe(nuevoheroe);
        this.servicio.home()

      } else if (result.isDenied) {
        Swal.fire('No se realizaron cambios', '', 'info')
        this.servicio.home()

      }
    })

    this.servicio.home();
  }

  // show(){
  //   Swal.fire({
  //     title: 'Error!',
  //     text: 'Do you want to continue',
  //     icon: 'error',
  //     confirmButtonText: 'Cool'
  //   })
  // }




  ima:string="";
  subir(event:any):any{
  // console.log(event.target.files);
  const archivocapturado =event.target.files[0];
  this.extraer(archivocapturado).then((image:any) =>{
    this.ima=image.base
    console.log(image)
    alert(this.ima)

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
