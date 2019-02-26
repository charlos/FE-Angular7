import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UimaterialXbModule } from './modules/uimaterial-xb/uimaterial-xb.module';
/*import { ToolbarXbComponent } from './components/toolbar-xb/toolbar-xb.component';*/
import { TemplateModule } from './template/template.module';

@NgModule({
  declarations: [
    AppComponent,
    /*  ToolbarXbComponent*/
  ],
  imports: [
    BrowserModule,
    UimaterialXbModule,
    TemplateModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
