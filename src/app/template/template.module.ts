import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { MainComponent } from './shell/main/main.component';
import { MenuComponent } from './shell/menu/menu.component';
import { FooterComponent } from './shell/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatToolbarModule, MatTabsModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, MainComponent, MenuComponent, FooterComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [
    ShellComponent
  ]
})
export class TemplateModule { }
