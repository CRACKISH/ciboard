import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppShellComponent } from './components/';
import { BoardModule } from './modules/board';

@NgModule({
  declarations: [
    AppShellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BoardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppShellComponent]
})
export class AppModule { }
