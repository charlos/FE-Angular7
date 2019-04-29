import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export interface SelectorElement {
  ID: any;
  nombre: string;
  codigo?: string;
  descripcion?: string;
  CreatedAt?: string;
  UpdatedAt?: string;
  DeletedAt?: string;
  activo?: Number
}

@Component({
  selector: 'app-selector-default',
  templateUrl: './selector-default.component.html',
  styleUrls: ['./selector-default.component.css']
})
export class SelectorDefaultComponent implements OnInit {
  @Input() value: SelectorElement;
  @Input('type') tipo: string;
  @Output() optionSelected = new EventEmitter();

  myControl = new FormControl();
  options: SelectorElement[];

  filteredOptions: Observable<SelectorElement[]>;

  ngOnInit() {
    switch (this.tipo) {
      case 'pais':
        this.options = [
          {
            ID: 1, nombre: 'Argentina'
          },
          {
            ID: 2, nombre: 'Brasil'
          }
        ]        
        break;
      case 'obrasocial':
        this.options = [
          {
            ID: 1, nombre: 'Galeno'
          },
          {
            ID: 2, nombre: 'OSDE'
          }
        ]
        break;
      default:
        this.options = [];
        break;
    }

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | SelectorElement>(''),
        map(value => typeof value === 'string' ? value : ''),
        map(name => name ? this._filter(name) : this.options.slice())
      );
    let filter = this.options.filter(option => option.ID == this.value.ID);
    let option = filter.length>0?filter[0]:null;
    this.myControl.setValue(option);
  }

  ngAfterViewInit() {

  }

  displayFn(selectorElement?: SelectorElement): string | undefined {
    return selectorElement ? selectorElement.nombre : undefined;
  }

  private _filter(name: string): SelectorElement[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.nombre.toLowerCase().indexOf(filterValue) === 0);
  }

  itemSelected(evt: any) {
    const value = evt.option.value;
    console.log(value);
    this.value.ID = value.ID;
    this.value.nombre = value.nombre;
    this.optionSelected.emit(value);
  }

  closed(evt: any) {
    console.log(evt.srcElement.value);
    //evt.srcElement.value = "";
  }

}
