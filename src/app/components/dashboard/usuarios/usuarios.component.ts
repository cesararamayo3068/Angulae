import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

const ListUsuarios: Usuario[] = [
  {usuario: "jperez", nombre: 'Juan', apellido: "Perez",sexo: 'Masculino'},
  {usuario: "mgomez", nombre: 'Martin', apellido: "Gomez",sexo: 'Masculino'},
  {usuario: "ngarcia", nombre: 'Nicolas', apellido: "Garcia",sexo: 'Masculino'},
  {usuario: "mgomez", nombre: 'Micaela', apellido: "Gomez",sexo: 'Femenino'},
  {usuario: "jperez", nombre: 'Juan', apellido: "Perez",sexo: 'Masculino'},
  {usuario: "jperez", nombre: 'Juan', apellido: "Perez",sexo: 'Masculino'},
];
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo','acciones'];
  dataSource = ListUsuarios;

  constructor() { }

  ngOnInit(): void {
  }

}
