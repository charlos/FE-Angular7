import { Component, AfterViewInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LegajosItem, LegajosApi, LegajoService } from '../../legajo.service';

/*export interface DialogData {
  legajoId: number;
  numeroLegajo: string;
  conductor: string;
  fecha: string;
  tipo: string;
}*/

@Component({
  selector: 'app-add-legajo',
  templateUrl: './add-legajo.component.html',
  styleUrls: ['./add-legajo.component.css']
})
export class AddLegajoComponent {
  @Input() legajo: number;
  numeroLegajo: string;
  conductor: string;
  fecha: string;
  tipo: string;

  constructor(public dialog: MatDialog, private http: HttpClient) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddLegajoDialog, {
      width: '875px',
      height: '520px',
      data: { ID: this.legajo, numeroLegajo: this.numeroLegajo, fecha: this.fecha, tipo: this.tipo }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed '+result);
      this.numeroLegajo = result;
    });
  }

}

@Component({
  selector: 'add-legajo-dialog',
  templateUrl: 'add-legajo-dialog.component.html',
  styleUrls: ['./add-legajo.component.css'],
})
export class AddLegajoDialog implements AfterViewInit{

  constructor(
    public dialogRef: MatDialogRef<AddLegajoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: LegajosItem,
    private legajoService: LegajoService
  ) { 

  }
  
  async ngAfterViewInit() {
    console.log("ngAfterViewInit()");
    if (this.data.ID) {
      console.log("Nro. Legajo: " + this.data.ID);
      
      const legajosItem: LegajosItem = await this.legajoService.getLegajo(this.data.ID);
      this.data = legajosItem;
    
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}