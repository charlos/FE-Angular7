import { Component, AfterViewInit, Inject, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LegajosItem, LegajosApi, LegajoService } from '../../legajo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  @Input() legajo: number;
  @Output() public update = new EventEmitter<LegajosItem>();
  @Output() public delete = new EventEmitter<LegajosItem>();
  numeroLegajo: string;
  conductor: string;
  fecha: string;
  tipo: string;

  constructor(
    public dialog: MatDialog,
    private legajoService: LegajoService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  editItem() {
    this.router.navigate(['/legajos', this.legajo]);
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