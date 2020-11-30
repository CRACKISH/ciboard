import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent, ProjectComponent } from './components/';
import { JenkinsService, ProjectService } from './services/';

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
    JenkinsService,
    ProjectService
  ]
})
export class BoardModule {}
