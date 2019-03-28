import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-legajo',
  templateUrl: './legajo.component.html',
  styleUrls: ['./legajo.component.css']
})
export class LegajoComponent implements AfterViewInit {
  displayedColumns: string[] = ['ID', 'Creado', 'Nombre', 'Legajo'];
  exampleDatabase: LegajoDB | null;
  data: LegajosItem[] = [];
  //data: LegajosApi;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) { }

  async ngAfterViewInit() {
    this.exampleDatabase = new LegajoDB(this.http);

    //this.isLoadingResults = false;
    const legajosApi: LegajosApi = await this.exampleDatabase.getLegajos(this.sort.active, this.sort.direction, 1);
    this.data = legajosApi.items;
    this.isLoadingResults = false;

  }
}

export interface LegajosApi {
  items: LegajosItem[];
  total_count: number;
}

export interface LegajosItem {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: null,
  Nombre: string;
  Apellido: string;
  Codigo: string;
  Descripcion: string;
  Activo: number;
  Legajo: string;
  Cuil: string;
  Direccion: string;
};

//export interface LegajosApi extends Array<LegajosItem> {};

export class LegajoDB {
  constructor(private http: HttpClient) { }

  public async getLegajos(sort: string, order: string, page: number): Promise<LegajosApi> {
    const token = JSON.parse(localStorage.getItem('currentUser')).Token
    const headers = new HttpHeaders()
      .append('token', token)
    const href = '/api/legajo/legajos';
    const requestUrl =
      `${href}`;

    let legajosApi: LegajosApi = { items: null, total_count: null };
    legajosApi.items = await this.http.get<LegajosItem[]>(requestUrl, {headers}).toPromise();
    legajosApi.total_count = legajosApi.items.length;
    
    return legajosApi;
  }
};