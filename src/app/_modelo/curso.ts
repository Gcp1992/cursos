import { Nivel } from "./nivel";
export class Curso {
   _id: number;
   _nombre: string;
   _duracion: number;
   _nivel: Nivel;

  //Constructor
  constructor(id: number, nombre: string, duracion: number, nivel: Nivel) {
    this._id = id;
    this._nombre = nombre;
    this._duracion = duracion;
    this._nivel = nivel;
  }

}



