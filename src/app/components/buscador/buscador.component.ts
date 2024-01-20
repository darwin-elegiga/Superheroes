import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Heroe } from '../../modules/Heroes.model';
import { RouterLink } from '@angular/router';
import { FindPipe } from '../pipes/find.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [CommonModule,RouterLink,FindPipe,FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  @Input() listado:Heroe[]=[];
  nombre:string='';
  close:boolean=false;
  @Output() emisor = new EventEmitter<boolean>();

  cerrar(){this.emisor.emit(this.close)}
}
