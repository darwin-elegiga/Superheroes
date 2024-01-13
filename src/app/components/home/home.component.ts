import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(  private sanitizer:DomSanitizer){
  }

  prueba(){
    Swal.fire({
      title: 'Esta seguro que desea modificar los datos del superheroe?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      denyButtonText: `No guardar`,
      customClass:{
        container:"contenedor",
        title:"titulo"
      }

    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Guardado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('No se realizaron cambios', '', 'info')
      }
    })

  }

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
