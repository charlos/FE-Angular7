import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  itemsMenu: string[] = ['Item 1', 'Item 2', 'Item 3'];
  
  constructor() { }

  ngOnInit() {
  }
}
