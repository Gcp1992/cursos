import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nivel } from '../_modelo/nivel';
import { CursoServioService } from '../curso-servio.service';
import { Curso } from '../_modelo/curso';
@Component({
  selector: 'app-tabla-moficar',
  templateUrl: './tabla-moficar.component.html',
  styleUrls: ['./tabla-moficar.component.css']
})
export class TablaMoficarComponent implements OnInit{
  constructor(public activarRoot:ActivatedRoute, public myService:CursoServioService, private router:Router){
  }

  ngOnInit(): void {
    //Para recibir el id que se pasa como parámetro
    this.cuadroId=this.activarRoot.snapshot.params['id'];
    //Para enviar información de manera dinámica
    this.myService.cursos.map((item,index,arr) => {
      if (item._id == this.cuadroId) this.curso_propio = item;
    })
  }

  curso_propio : Curso | undefined;
  cuadroId:number=0;/*
  cuadroNombre:string="";
  cuadroDuracion:number=0;
  cuadroNivel:Nivel;*/

  updateCurso(){
    this.myService.actualizarCursosServicio(this.curso_propio!);
    this.router.navigate(['']);
  }

}
