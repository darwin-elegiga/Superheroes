import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Heroe } from '../../modules/Heroes.model';

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {
  @Input() heroe:Heroe=new Heroe()
  @Input() indice:number=0

}
