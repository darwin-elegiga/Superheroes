import { ListaComponent } from './components/lista/lista.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdicionarComponent } from './components/adicionar/adicionar.component';
import { ModificarComponent } from './components/modificar/modificar.component';

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'lista', component:ListaComponent},
  {path: 'adicionar', component:AdicionarComponent},
  {path: 'modificar/:id', component:ModificarComponent},

];
