import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent, ProjectComponent } from './components/';
import { ProjectService } from './services/';

@NgModule({
  imports: [
    CommonModule,
    BoardRoutingModule
  ],
  declarations: [
    BoardComponent,
    ProjectComponent
  ],
  providers: [
    ProjectService
  ]
})
export class BoardModule {}
