import { Component, OnInit } from '@angular/core';

export interface ItemMenu {
  nombre: string;
  url: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  itemsMenu: ItemMenu[] = [
    {nombre: 'Legajos', url: '/legajos'},
    {nombre: 'Centros', url: '/centros'},
    {nombre: 'Transportistas', url: '/transportistas'}
  ];

  constructor() { }

  ngOnInit() {
  }
}
