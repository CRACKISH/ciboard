import { Component, OnInit } from '@angular/core';
import { Project, ProjectService } from '@common-api';
import { take } from 'rxjs/operators';

@Component({
  selector: 'ci-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  public projects: Project[] = [];

  constructor(
    private projectService: ProjectService
  ) {}

  public ngOnInit(): void {
    this.projectService.getProjects()
      .pipe(
        take(1)
      )
      .subscribe(projects => this.projects = projects);
  }

  public editProject(projectId: number): void {

  }

  public deleteProject(projectId: number): void {

  }

}
