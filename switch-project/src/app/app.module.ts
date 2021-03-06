import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {JWBootstrapSwitchModule} from "jw-bootstrap-switch-ng2";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JWBootstrapSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
