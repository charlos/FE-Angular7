import { LegajosItem, LegajosApi, LegajoService } from '../legajo.service';
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
  displayedColumns: string[] = ['ID', 'Creado', 'Nombre', 'Legajo', 'Acciones'];
  data: LegajosItem[] = [];
  //data: LegajosApi;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private legajoService: LegajoService) { }

  async ngAfterViewInit() {
    //this.isLoadingResults = false;
    const legajosApi: LegajosApi = await this.legajoService.getLegajos(this.sort.active, this.sort.direction, 1);
    this.data = legajosApi.items;
    this.isLoadingResults = false;

  }

  createItem(item: LegajosItem){
    console.log(item);  
  }

  onUpdate(item: LegajosItem) {
    console.log("Update Item: " + JSON.stringify(item));
    this.data.push(item);
  }

  deleteItem(item: LegajosItem) {
    console.log(item); 
  }
}