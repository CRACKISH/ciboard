import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Project, ProjectStatus, ProjectType } from './../models/project.model';

@Injectable()
export class ProjectService {

  public getProjects(): Observable<Project[]> {
    const projects: Project[] = [];
    for (let i = 0; i < 10; i++) {
      projects.push({
        id: i,
        name: `Test project ${i}`,
        type: ProjectType.Jenkins,
        status: ProjectStatus.Successful
      });
    }
    return of(projects);
  }


}
