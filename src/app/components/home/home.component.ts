import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { blob } from 'stream/consumers';
import { error } from 'console';

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
