import { Component, AfterViewInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  numeroLegajo: string;
  conductor: string;
  fecha: string;
  tipo: string;
}

@Component({
  selector: 'app-add-legajo',
  templateUrl: './add-legajo.component.html',
  styleUrls: ['./add-legajo.component.css']
})
export class AddLegajoComponent {
  numeroLegajo: string;
  conductor: string;
  fecha: string;
  tipo: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddLegajoDialog, {
      width: '875px',
      height: '315px',
      data: { numeroLegajo: this.numeroLegajo, fecha: this.fecha, tipo: this.tipo }
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { 

  }
  
  ngAfterViewInit() {
    console.log("ngAfterViewInit()");
    if (this.data.numeroLegajo) {
      console.log("Nro. Legajo: " + this.data.numeroLegajo);
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}