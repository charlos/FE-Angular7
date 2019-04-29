import { Component, AfterViewInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
  @Output() public update = new EventEmitter<LegajosItem>();
  @Output() public delete = new EventEmitter<LegajosItem>();
  numeroLegajo: string;
  conductor: string;
  fecha: string;
  tipo: string;

  constructor(public dialog: MatDialog, private legajoService: LegajoService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddLegajoDialog, {
      width: '875px',
      height: '520px',
      data: { ID: this.legajo, numeroLegajo: this.numeroLegajo, fecha: this.fecha, tipo: this.tipo }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El dialog fue cerrado '+ JSON.stringify(result));
      if(result) {
        this.update.emit(result);
      }
    });
  }

  async deleteItem() {
    const item: LegajosItem = { 
      ID: this.legajo,
      CreatedAt: null,
      UpdatedAt: null,
      DeletedAt: null,
      nombre: null,
      apellido: null,
      codigo: null,
      descripcion: null,
      activo: null,
      legajo: null,
      cuil: null,
      cbu: null,
      direccion: null,
      hijos: null,
      paisid: null
    }

    await this.legajoService.deleteLegajo(item);
    this.delete.emit(item);
  }

}

@Component({
  selector: 'add-legajo-dialog',
  templateUrl: 'add-legajo-dialog.component.html',
  styleUrls: ['./add-legajo.component.css'],
})
export class AddLegajoDialog implements AfterViewInit{
  @Output() public create = new EventEmitter<LegajosItem>();

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

  async onClickSave(): Promise<LegajosItem> {
    let legajosItem: LegajosItem;
    if (this.data.ID) {
      legajosItem = await this.legajoService.putLegajo(this.data);
    } else {
      legajosItem = await this.legajoService.postLegajo(this.data);
    }

    this.create.emit(legajosItem)
    return legajosItem;
  }
}