import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export interface SelectorElement {
  value: any;
  viewValue: string;
}

@Component({
  selector: 'app-selector-default',
  templateUrl: './selector-default.component.html',
  styleUrls: ['./selector-default.component.css']
})
export class SelectorDefaultComponent implements OnInit {
  @Input() value: number;
  @Output() optionSelected = new EventEmitter();

  myControl = new FormControl();
  options: SelectorElement[] = [
    {
      value: 1, viewValue: 'Argentina'
    },
    {
      value: 2, viewValue: 'Brasil'
    },
    {
      value: 3, viewValue: 'Colombia'
    }, {
      value: 4, viewValue: 'Dinamarca'
    }
  ];

  filteredOptions: Observable<SelectorElement[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | SelectorElement>(''),
        map(value => typeof value === 'string' ? value : value.viewValue),
        map(name => name ? this._filter(name) : this.options.slice())
      );

    this.myControl.setValue(this.value);
  }

  displayFn(selectorElement?: SelectorElement): string | undefined {
    return selectorElement ? selectorElement.viewValue : undefined;
  }

  private _filter(name: string): SelectorElement[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.viewValue.toLowerCase().indexOf(filterValue) === 0);
  }

  itemSelected(evt: any) {
    const value = evt.option.value;
    console.log(value);
    this.optionSelected.emit(value);
  }

  closed(evt: any) {
    console.log(evt.srcElement.value);
    //evt.srcElement.value = "";
  }

}
