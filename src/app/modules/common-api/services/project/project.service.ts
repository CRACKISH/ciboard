import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Project } from './../../models/project.model';

@Injectable()
export class ProjectService {

  constructor(private httpClient: HttpClient) {}

  public getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>('/api/projects');
  }

  public getProject(id: number): Observable<Project | undefined> {
    return this.httpClient.get<Project>(`/api/projects/${id}`);
  }

}
