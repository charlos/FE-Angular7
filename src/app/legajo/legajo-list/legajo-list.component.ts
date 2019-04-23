import { LegajosItem, LegajosApi, LegajoService } from '../legajo.service';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { NotificationService } from 'src/app/handler-error/notification.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-legajo-list',
  templateUrl: './legajo-list.component.html',
  styleUrls: ['./legajo-list.component.css']
})
export class LegajoListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['ID', 'Creado', 'Nombre', 'Legajo', 'Acciones'];
  dataSource: MatTableDataSource<LegajosItem> = new MatTableDataSource<LegajosItem>();
  //data: LegajosApi;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatSort) sort: MatSort;
  legajoID$: Observable<String>;
  public currentLegajo$: Observable<LegajosItem> = null;
  id: number;


  constructor(
    private route: ActivatedRoute,
    private legajoService: LegajoService,
    public dialog: MatDialog,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    /*this.currentLegajo$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.id = +params.get('id');
        console.log('Url ID: ' + this.id);
        return this.legajoService.getLegajo(this.id);
      })
    );*/
  }

  async ngAfterViewInit() {

      //this.isLoadingResults = false;
      const legajosApi: LegajosApi = await this.legajoService.getLegajos(this.sort.active, this.sort.direction, 1);
      this.dataSource = new MatTableDataSource<LegajosItem>(legajosApi.items);
      this.isLoadingResults = false;

  }

  onCreate(item: LegajosItem) {
    console.log("Created Item: " + item.ID);
    this.dataSource.data.push(item);

    this.dataSource = new MatTableDataSource<LegajosItem>(this.dataSource.data);
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