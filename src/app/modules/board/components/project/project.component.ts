import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { ProjectService } from '../../services/project/project.service';
import { Project, ProjectType } from './../../models/project.model';

@Component({
  selector: 'ci-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

  private unsubscribe$ = new Subject<void>();

  @Input()
  public id = 0;

  public project: Project;

  constructor(
    private projectService: ProjectService
  ) {
    this.project = this.createEmptyProject();
  }

  private createEmptyProject(): Project {
    return {
      id: -1,
      name: 'No Data',
      type: ProjectType.Jenkins
    };
  }

  private subscribeCIJobData(): void {
    const service;
    service.getJob()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(cijob => {

      });
  }

  public ngOnInit(): void {
    this.projectService.getProject(this.id)
      .pipe(
        take(1)
      )
      .subscribe(project => {
        this.project = project ? project : this.createEmptyProject();
        this.subscribeCIJobData();
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
