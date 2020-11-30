import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Project, ProjectType } from '../../models/project.model';

@Injectable()
export class ProjectService {

  private projects: Project[] = [{
    id: 0,
    name: 'app.studio-enterprise.relationship-diagram',
    type: ProjectType.Jenkins,
    ciJobKey: 'app.studio-enterprise.relationship-diagram'
  }, {
    id: 1,
    name: 'lib.sdk.process-diagram',
    type: ProjectType.Jenkins,
    ciJobKey: 'lib.sdk.process-diagram'
  }];

  public getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  public getProject(id: number): Observable<Project | undefined> {
    const findedProject = this.projects.find(project => project.id === id);
    return of(findedProject);
  }

}
