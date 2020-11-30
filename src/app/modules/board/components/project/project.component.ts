import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Project, ProjectStatus, ProjectType } from './../../models/project.model';

@Component({
  selector: 'ci-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

  @Input()
  public id = 0;

  public project: Project = {
    id: -1,
    name: 'No Data',
    type: ProjectType.Jenkins,
    status: ProjectStatus.NotInitialized
  };

  public ngOnInit(): void {
    this.project = {} as Project;
  }

  public ngOnDestroy(): void {
  }

}
