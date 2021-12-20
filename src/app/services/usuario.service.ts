import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  ListUsuarios: Usuario[] = [
    {usuario: "jperez", nombre: 'Juan', apellido: "Perez",sexo: 'Masculino'},
    {usuario: "mgomez", nombre: 'Martin', apellido: "Gomez",sexo: 'Masculino'},
    {usuario: "ngarcia", nombre: 'Nicolas', apellido: "Garcia",sexo: 'Masculino'},
    {usuario: "mgomez", nombre: 'Micaela', apellido: "Gomez",sexo: 'Femenino'},
    {usuario: "jperez", nombre: 'Juan', apellido: "Perez",sexo: 'Masculino'},
    {usuario: "jperez", nombre: 'Juan', apellido: "Perez",sexo: 'Masculino'},
  ];
  

  constructor() { }

  getUsuario(){
    //retorna una copia del listado de Usuarios
    return this.ListUsuarios.slice();
  }

  eliminarUsuario(index:number){
    this.ListUsuarios.splice(index,1);

  }
  agregarUsuario(usuario:Usuario){
    this.ListUsuarios.unshift(usuario);
  }
}
