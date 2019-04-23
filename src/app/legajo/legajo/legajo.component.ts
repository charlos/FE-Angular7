import { LegajosItem, LegajosApi, LegajoService } from '../legajo.service';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { AddLegajoDialog } from './add-legajo/add-legajo.component';
import { NotificationService } from 'src/app/handler-error/notification.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-legajo',
  templateUrl: './legajo.component.html',
  styleUrls: ['./legajo.component.css']
})
export class LegajoComponent implements AfterViewInit {
  public currentLegajo$: Observable<LegajosItem> = null;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private legajoService: LegajoService,
    public dialog: MatDialog,
    private notificationService: NotificationService,
    private router: Router
    ) { }

  ngOnInit() {
    this.currentLegajo$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        if (params.get('id') == "nuevo") {
          console.log("Nuevo Legajo");
        }
        this.id = +params.get('id');
        const legajo = this.legajoService.getLegajo(this.id);
        console.log(legajo);
        
        return legajo;
      })
    );
  }

  async ngAfterViewInit() {

  }

  private gotoGrilla() {
    this.router.navigate(['/legajos']);
  }

  onClickAbort(): void {
    this.gotoGrilla();
  }

  async onClickSave(data: LegajosItem): Promise<LegajosItem> {
    let legajosItem: LegajosItem;
    if (this.id) {
      console.log("Updated Legajo");
      legajosItem = await this.legajoService.putLegajo(data);
    } else {
      console.log("Created Legajo");
      legajosItem = await this.legajoService.postLegajo(data);
      this.gotoGrilla();
    }

    console.log(data);
    //this.create.emit(legajosItem)
    return legajosItem;
  }

}