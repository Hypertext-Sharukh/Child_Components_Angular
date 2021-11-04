import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiaComponent } from './india/india.component';
import { DelhiComponent } from './india/delhi/delhi.component';
import { MumbaiComponent } from './india/mumbai/mumbai.component';
import { UsaComponent } from './usa/usa.component';
import { NewyorkComponent } from './usa/newyork/newyork.component';
import { CalifoniaComponent } from './usa/califonia/califonia.component';

@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent,
    DelhiComponent,
    MumbaiComponent,
    UsaComponent,
    NewyorkComponent,
    CalifoniaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
