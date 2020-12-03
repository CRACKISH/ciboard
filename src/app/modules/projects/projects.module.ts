import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { CommonApiModule } from '@common-api';

import { ProjectDialogComponent, ProjectListComponent } from './components';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CommonApiModule,
    ProjectsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  declarations: [
    ProjectDialogComponent,
    ProjectListComponent
  ]
})
export class ProjectsModule {}
