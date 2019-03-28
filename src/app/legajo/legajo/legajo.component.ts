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

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) { }

  ngAfterViewInit() {
    this.exampleDatabase = new LegajoDB(this.http);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getLegajos(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = 1; // deberia ir algo del estilo "data.total_count"

          return data; // deberia ir algo del estilo "data.items"
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }
}

/*export interface LegajosApi {
  items: LegajosItem[];
  total_count: number;
}*/

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

export interface LegajosApi extends Array<LegajosItem> {};

export class LegajoDB {
  constructor(private http: HttpClient) { }

  getLegajos(sort: string, order: string, page: number): Observable<LegajosApi> {
    const token = JSON.parse(localStorage.getItem('currentUser')).Token
    const headers = new HttpHeaders()
      .append('token', token)
    const href = '/api/legajo/legajos';
    const requestUrl =
      `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;

    return this.http.get<LegajosApi>(requestUrl, {headers});
  }
};