import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaCursosComponent } from './tabla-cursos/tabla-cursos.component';
import { TablaMoficarComponent } from './tabla-moficar/tabla-moficar.component';

const routes: Routes = [
  {path:"", component:TablaCursosComponent},
  //Parámetro que se le pasa a la URL
  {path:"tablaModificar/:id", component:TablaMoficarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
