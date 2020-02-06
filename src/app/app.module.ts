import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';


import { LayoutModule } from './layout/layout.module'
// import { HomeComponent } from './routes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
