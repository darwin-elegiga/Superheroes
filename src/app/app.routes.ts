import { ListaComponent } from './components/lista/lista.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdicionarComponent } from './components/adicionar/adicionar.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { SliderComponent } from './components/slider/slider.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'lista', component:ListaComponent},
  {path: 'slider', component:SliderComponent},
  {path: 'adicionar', component:AdicionarComponent},
  {path: 'modificar/:id', component:ModificarComponent},

];
