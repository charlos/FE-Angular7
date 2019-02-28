import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

export interface LegajoElement {
  ID: number,
  CreatedAt: string,
  UpdatedAt: string,
  DeletedAt: string,
  Nombre: string,
  Codigo: string,
  Descripcion: string,
  Activo: number
}

const ELEMENT_DATA: LegajoElement[] = [
  {
    ID: 5,
    CreatedAt: "2019-01-15T10:21:54.652265-03:00",
    UpdatedAt: "2019-01-22T11:07:38.64822-03:00",
    DeletedAt: null,
    Nombre: "Legajo Prueba",
    Codigo: "L0004",
    Descripcion: "Legajo numero 2",
    Activo: 1
  },
  {
    ID: 7,
    CreatedAt: "2019-01-15T11:05:42.111766-03:00",
    UpdatedAt: "2019-01-15T11:05:42.111766-03:00",
    DeletedAt: null,
    Nombre: "Legajo 2",
    Codigo: "L0002",
    Descripcion: "Legajo número 2",
    Activo: 1
  },
  {
    ID: 8,
    CreatedAt: "2019-01-22T09:57:07.152234-03:00",
    UpdatedAt: "2019-01-23T13:54:18.652656-03:00",
    DeletedAt: null,
    Nombre: "Legajo Prueba",
    Codigo: "L0003",
    Descripcion: "Probando Patch",
    Activo: 1
  },
  {
    ID: 9,
    CreatedAt: "2019-01-15T10:21:54.652265-03:00",
    UpdatedAt: "2019-01-22T11:07:38.64822-03:00",
    DeletedAt: null,
    Nombre: "Legajo Prueba",
    Codigo: "L0004",
    Descripcion: "Legajo numero 2",
    Activo: 1
  },
  {
    ID: 10,
    CreatedAt: "2019-01-15T11:05:42.111766-03:00",
    UpdatedAt: "2019-01-15T11:05:42.111766-03:00",
    DeletedAt: null,
    Nombre: "Legajo 2",
    Codigo: "L0002",
    Descripcion: "Legajo número 2",
    Activo: 1
  },
  {
    ID: 11,
    CreatedAt: "2019-01-22T09:57:07.152234-03:00",
    UpdatedAt: "2019-01-23T13:54:18.652656-03:00",
    DeletedAt: null,
    Nombre: "Legajo Prueba",
    Codigo: "L0003",
    Descripcion: "Probando Patch",
    Activo: 1
  },
  {
    ID: 12,
    CreatedAt: "2019-01-15T10:21:54.652265-03:00",
    UpdatedAt: "2019-01-22T11:07:38.64822-03:00",
    DeletedAt: null,
    Nombre: "Legajo Prueba",
    Codigo: "L0004",
    Descripcion: "Legajo numero 2",
    Activo: 1
  },
  {
    ID: 13,
    CreatedAt: "2019-01-15T11:05:42.111766-03:00",
    UpdatedAt: "2019-01-15T11:05:42.111766-03:00",
    DeletedAt: null,
    Nombre: "Legajo 2",
    Codigo: "L0002",
    Descripcion: "Legajo número 2",
    Activo: 1
  },
  {
    ID: 14,
    CreatedAt: "2019-01-22T09:57:07.152234-03:00",
    UpdatedAt: "2019-01-23T13:54:18.652656-03:00",
    DeletedAt: null,
    Nombre: "Legajo Prueba",
    Codigo: "L0003",
    Descripcion: "Probando Patch",
    Activo: 1
  },
  {
    ID: 15,
    CreatedAt: "2019-01-15T10:21:54.652265-03:00",
    UpdatedAt: "2019-01-22T11:07:38.64822-03:00",
    DeletedAt: null,
    Nombre: "Legajo Prueba",
    Codigo: "L0004",
    Descripcion: "Legajo numero 2",
    Activo: 1
  },
  {
    ID: 16,
    CreatedAt: "2019-01-15T11:05:42.111766-03:00",
    UpdatedAt: "2019-01-15T11:05:42.111766-03:00",
    DeletedAt: null,
    Nombre: "Legajo 2",
    Codigo: "L0002",
    Descripcion: "Legajo número 2",
    Activo: 1
  },
  {
    ID: 17,
    CreatedAt: "2019-01-22T09:57:07.152234-03:00",
    UpdatedAt: "2019-01-23T13:54:18.652656-03:00",
    DeletedAt: null,
    Nombre: "Legajo Prueba",
    Codigo: "L0003",
    Descripcion: "Probando Patch",
    Activo: 1
  }
];

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Nombre', 'Codigo', 'Descripcion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
