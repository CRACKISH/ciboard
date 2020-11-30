import { Component, OnInit } from '@angular/core';

import { Project, ProjectStatus, ProjectType } from './../../models/project.model';
import { ProjectService } from './../../services/project.service';

@Component({
  selector: 'ci-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public projects: Project[] = [];

  constructor(
    private projectService: ProjectService
  ) {}

  public ngOnInit(): void {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);

  }

}
