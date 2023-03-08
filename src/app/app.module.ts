import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Service } from './app.service';

import {
  DxCheckBoxModule,
  DxFormModule,
  DxTextBoxModule,
} from 'devextreme-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DxFormModule, DxCheckBoxModule, DxTextBoxModule],
  providers: [Service],
  bootstrap: [AppComponent],
})
export class AppModule {}
