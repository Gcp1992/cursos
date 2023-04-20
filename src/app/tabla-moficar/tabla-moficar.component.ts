import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nivel } from '../_modelo/nivel';
import { CursoServioService } from '../curso-servio.service';
import { Curso } from '../_modelo/curso';
@Component({
  selector: 'app-tabla-moficar',
  templateUrl: './tabla-moficar.component.html',
  styleUrls: ['./tabla-moficar.component.css']
})
export class TablaMoficarComponent {
  constructor(public activarRoot:ActivatedRoute, public myService:CursoServioService, private router:Router){
    //Para recibir el id que se pasa como parámetro
    this.cuadroId=this.activarRoot.snapshot.params['id'];
  }

  cuadroId:number=0;
  cuadroNombre:string="";
  cuadroDuracion:number=0;
  cuadroNivel:Nivel;

  updateCurso(){
    this.myService.actualizarCursosServicio(new Curso(this.cuadroId,this.cuadroNombre,this.cuadroDuracion,this.cuadroNivel));
    this.router.navigate(['']);
  }

}
