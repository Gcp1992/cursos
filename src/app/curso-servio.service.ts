import { Injectable } from '@angular/core';
import { Curso } from './_modelo/curso';
import { Nivel } from './_modelo/nivel';

@Injectable({
  providedIn: 'root'
})
export class CursoServioService {

  //Almaceno en una variable un array de objetos de tipo Curso
  cursos: Curso[] = [new Curso(1,"Java",20,Nivel.Intermedio),
  new Curso(2,"Javascript",40,Nivel.Iniciacion),
  new Curso(3,"PHP",20,Nivel.Avanzado)];

  constructor() { }

  actualizarCursosServicio(ObjetoCurso:Curso){
    let elementIndex = this.cursos.findIndex((obj => obj._id == ObjetoCurso._id));
   this.cursos[elementIndex]._id = ObjetoCurso._id;
   this.cursos[elementIndex]._nombre = ObjetoCurso._nombre;
   this.cursos[elementIndex]._duracion = ObjetoCurso._duracion;
   this.cursos[elementIndex]._nivel = ObjetoCurso._nivel;
  }
}
