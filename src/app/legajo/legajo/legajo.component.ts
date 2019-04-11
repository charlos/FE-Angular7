import { LegajosItem, LegajosApi, LegajoService } from '../legajo.service';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-legajo',
  templateUrl: './legajo.component.html',
  styleUrls: ['./legajo.component.css']
})
export class LegajoComponent implements AfterViewInit {
  displayedColumns: string[] = ['ID', 'Creado', 'Nombre', 'Legajo', 'Acciones'];
  dataSource: MatTableDataSource<LegajosItem> = new MatTableDataSource<LegajosItem>();
  //data: LegajosApi;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private legajoService: LegajoService) { }

  async ngAfterViewInit() {
    //this.isLoadingResults = false;
    const legajosApi: LegajosApi = await this.legajoService.getLegajos(this.sort.active, this.sort.direction, 1);
    this.dataSource = new MatTableDataSource<LegajosItem>(legajosApi.items);
    this.isLoadingResults = false;

  }

  createItem(item: LegajosItem){
    console.log(item);  
  }

  onUpdate(item: LegajosItem) {
    console.log("Updated Item: " + item.ID);
    this.dataSource.data.forEach(function (el, index) { 
      if (el.ID == item.ID) this.dataSource.data.splice(index, 1, item); 
    }, this);

    this.dataSource = new MatTableDataSource<LegajosItem>(this.dataSource.data);
  }

  onDelete(item: LegajosItem) {
    console.log("Deleted Item: " + item.ID); 
    this.dataSource.data.forEach(function (el, index) {
      if (el.ID == item.ID) this.dataSource.data.splice(index, 1);
    }, this);

    this.dataSource = new MatTableDataSource<LegajosItem>(this.dataSource.data);
  }

  refreshTableSorce() {
    
  }
}