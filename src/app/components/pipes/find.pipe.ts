import { Heroe } from './../../modules/Heroes.model';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'find',
  standalone: true
})
export class FindPipe implements PipeTransform {

  transform(value: Heroe[], nombre: string): Heroe[] {
    var aux:Heroe[]=[];

    for(let heroe of value){
      if(heroe.superhero.toLowerCase().indexOf(nombre.toLowerCase())>-1){
        aux.push(heroe);
      }

    }

    return aux;
  }

}
