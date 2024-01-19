import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinner:NgxSpinnerService) { }

  llamarspinner(){
    this.spinner.show()
  }
  detenerspiner(){
    this.spinner.hide()
  }
}
