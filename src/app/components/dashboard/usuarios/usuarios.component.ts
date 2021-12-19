import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';

 
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  ListUsuarios: Usuario[] = [
    {usuario: "jperez", nombre: 'Juan', apellido: "Perez",sexo: 'Masculino'},
    {usuario: "mgomez", nombre: 'Martin', apellido: "Gomez",sexo: 'Masculino'},
    {usuario: "ngarcia", nombre: 'Nicolas', apellido: "Garcia",sexo: 'Masculino'},
    {usuario: "mgomez", nombre: 'Micaela', apellido: "Gomez",sexo: 'Femenino'},
    {usuario: "jperez", nombre: 'Juan', apellido: "Perez",sexo: 'Masculino'},
    {usuario: "jperez", nombre: 'Juan', apellido: "Perez",sexo: 'Masculino'},
  ];
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo','acciones'];
  
  dataSource = new MatTableDataSource(this.ListUsuarios);
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
