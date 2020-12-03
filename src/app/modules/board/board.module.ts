import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CommonApiModule } from './../common-api/common-api.module';
import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent, ProjectComponent } from './components/';

@NgModule({
  imports: [
    CommonModule,
    BoardRoutingModule,
    CommonApiModule
  ],
  declarations: [
    BoardComponent,
    ProjectComponent
  ]
})
export class BoardModule {}
