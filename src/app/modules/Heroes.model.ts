export class Heroe{
  id:string;
  superhero:string;
  publisher:string;
  alter_ego:string;
  first_appearance:string;
  characters:string;
  imagen:string;

  constructor(id:string="",superhero:string="",publisher:string="",alter_ego:string="",first_appearance:string="",characters:string="",imagen:string="",){
    this.id=id;
    this.superhero=superhero;
    this.publisher=publisher;
    this.alter_ego=alter_ego;
    this.first_appearance=first_appearance;
    this.characters=characters;
    this.imagen=imagen
  }

}
