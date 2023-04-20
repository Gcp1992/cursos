import { Component } from '@angular/core';
import { CursoServioService } from '../curso-servio.service';
import { Router } from '@angular/router';
import { Nivel } from '../_modelo/nivel';
import { Curso } from '../_modelo/curso';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.css']
})
export class TablaCursosComponent {

  //Inyección
  //Lo hacemos para que en el HTML salga la tabla que he hecho en el servicio
  constructor(public miServicio:CursoServioService,private router:Router){

  }

  id:number=0;
  nombre:string="";
  duracion:number=0;
  nivel:Nivel=Nivel.Iniciacion;

  actualizarTabla(){
    this.miServicio.actualizarCursosServicio(new Curso(this.id,this.nombre,this.duracion,this.nivel));
    this.router.navigate(['tablaModificar', this.id])
  }
}
