import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Project, ProjectType } from '../../models/project.model';

@Injectable()
export class ProjectService {

  private projects: Project[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.projects.push({
        id: i,
        name: `Test project ${i}`,
        type: ProjectType.Jenkins
      });
    }
  }

  public getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  public getProject(id: number): Observable<Project | undefined> {
    const findedProject = this.projects.find(project => project.id === id);
    return of(findedProject);
  }

}
